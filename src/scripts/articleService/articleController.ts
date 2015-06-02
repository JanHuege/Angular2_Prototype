/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/articleService/article.d.ts"/>
/// <reference path="../../definitions/articleService/articleResource.d.ts"/>
/// <reference path="../../definitions/shoppingcartService/shoppingcartService.d.ts"/>

/* tslint:disable */
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';
import {ShoppingcartService} from '../shoppingcartService/shoppingcartService';
import {Rater} from '../util/raterComponent';

@Component({
    selector: 'articlecontroller',
    componentServices: [ShoppingcartService]
})
@View({
    templateUrl: "html_templates/articles_template.html",
    directives: [NgFor, Rater]
})
/* tslint:enable */
export class ArticleController {
    articles: Array<Article>;
    articleMock: ArticleResource;

    startNo: number;
    endNo: number;

    constructor() {
        console.log("constructor: ArticleController");
        this.articleMock = new ArticleResource();
        this.articles = this.articleMock.getArticles();
        this.startNo = 0;
        this.endNo = 6;
    }

    public next(): void {
        this.startNo += 6;
        this.endNo += 6;
        this.articles = this.articleMock.getArticles(this.startNo, this.endNo);
    }

    public previous(): void {
        if (this.startNo >= 6) {
            this.startNo -= 6;
            this.endNo -= 6;
            this.articles = this.articleMock.getArticles(this.startNo, this.endNo);
        }
    }

    public addArticle(article: Article): void {
        ShoppingcartService.addToCart(article.id);

        console.log("Added to Cart");
    }
}
