/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/articleService/article.d.ts"/>
/// <reference path="../../definitions/articleService/articleResource.d.ts"/>
/// <reference path="../../definitions/shoppingcartService/shoppingcartService.d.ts"/>

/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
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
    directives: [For, Rater]
})
/* tslint:enable */
export class ArticleController {
    articles: Array<Article>;
    articleMock: ArticleResource;

    constructor() {
        console.log("constructor: ArticleController");
        this.articleMock = new ArticleResource();
        this.articles = this.articleMock.getArticles();
    }

    public addArticle(article: Article): void {
        ShoppingcartService.addToCart(article.id);

        console.log("Added to Cart");
    }
}
