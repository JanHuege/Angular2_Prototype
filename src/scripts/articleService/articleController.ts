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

    noOfArticlesOnPage: number = 6;

    startNo: number;
    endNo: number;

    constructor() {
        console.log("constructor: ArticleController");
        this.articleMock = new ArticleResource();
        this.articles = this.articleMock.getArticles();
        this.startNo = 0;
        this.endNo = this.startNo + this.noOfArticlesOnPage;
    }

    public next(): void {

        if (this.endNo !== this.articleMock.articles.length) {

            this.startNo += this.noOfArticlesOnPage;
            this.endNo += this.noOfArticlesOnPage;

            if (this.endNo >= this.articleMock.articles.length) {
                this.endNo = this.articleMock.articles.length;
            }

            this.articles = this.articleMock.getArticles(this.startNo, this.endNo);
        }

    }

    public previous(): void {

        if (this.startNo >= this.noOfArticlesOnPage) {
            this.startNo -= this.noOfArticlesOnPage;
            this.endNo = this.startNo + this.noOfArticlesOnPage;

            this.articles = this.articleMock.getArticles(this.startNo, this.endNo);
        }
    }

    public addArticle(article: Article): void {
        ShoppingcartService.addToCart(article.id);

        console.log("Added to Cart");
    }
}
