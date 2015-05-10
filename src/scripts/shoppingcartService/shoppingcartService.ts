import {OrderItem} from './orderItem';
import {Article} from '../articleService/article';
import {ArticleResource} from '../articleService/articleResource';

var orderItems: List<OrderItem> = [];

export let ShoppingcartService = {

    get() {
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

        if(!article) {
            return;
        }

        var items = orderItems.filter(item => item.article.id == id);

        if(items.length > 0) {
            items[0].quantity += 1;
        }
        else {
            orderItems.push(new OrderItem(article));
        }
    },

    deleteFromCart(delid: number): void {
        orderItems.forEach(function(item: OrderItem, index: number) {
            if (item.article.id == delid) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    console.log("delete item " + delid);
                }
                else {
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
        orderItems.forEach(function(item: OrderItem): void {
            s += item.article.name + " " + item.quantity + "x " + item.getTotalPrice() + "\u20AC \n";
        });
        return s;
    }


};