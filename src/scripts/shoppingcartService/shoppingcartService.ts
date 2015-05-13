/// <reference path="../../definitions/shoppingcartService/orderItem.d.ts"/>
/// <reference path="../../definitions/articleService/article.d.ts"/>
/// <reference path="../../definitions/articleService/articleResource.d.ts"/>

/* tslint:disable */
import {OrderItem} from './orderItem';
import {Article} from '../articleService/article';
import {ArticleResource} from '../articleService/articleResource';
/* tslint:enable */
var orderItems: List<OrderItem> = [];

export let ShoppingcartService: any = {

    get(): List<OrderItem> {
        return orderItems;
    },

    calculateTotal(): number {
        var val: number = 0;
        orderItems.forEach((item: OrderItem) => {
            val += item.getTotalPrice();
        });
        return Math.round(val * 100) / 100;
    },

    addToCart(id: number): void {
        var articleMock: ArticleResource = new ArticleResource();
        var article: Article = articleMock.findArticleById(id);

        if (!article) {
            return;
        }

        var items: List<OrderItem> = orderItems.filter((item: OrderItem) => item.article.id === id);

        if (items.length > 0) {
            items[0].quantity += 1;
        } else {
            orderItems.push(new OrderItem(article));
        }
    },

    deleteFromCart(delid: number): void {
        orderItems.forEach((item: OrderItem, index: number) => {
            if (item.article.id === delid) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    orderItems.splice(index, 1);
                }
            }
        });
    },

    emptyCart(): void {
        alert("Bestellung im Wert von " + this.calculateTotal() + "\u20AC erfolgreich! \n" +
            this.toString());
        orderItems = [];
    },

    toString(): string {
        var s: string = "";
        orderItems.forEach((item: OrderItem): void => {
            s += item.article.name + " " + item.quantity + "x " + item.getTotalPrice() + "\u20AC \n";
        });
        return s;
    }


};
