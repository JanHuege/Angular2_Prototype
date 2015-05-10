import {Article} from '../articleService/article';

export class OrderItem {
    article: Article;
    quantity: number = 1;

    constructor(article: Article) {
        this.article = article;
    }

    getTotalPrice(): number {
        var total: number = this.article.price * this.quantity;
        return Math.round(total * 100) / 100;
    }
}