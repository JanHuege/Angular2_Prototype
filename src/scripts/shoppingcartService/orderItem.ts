/// <reference path="../../definitions/articleService/article.d.ts"/>
/* tslint:disable */
import {Article} from '../articleService/article';
/* tslint:enable */
export class OrderItem {
    article: Article;
    quantity: number = 1;

    constructor(article: Article) {
        this.article = article;
    }

    public getTotalPrice(): number {
        var total: number = this.article.price * this.quantity;
        return Math.round(total * 100) / 100;
    }
}
