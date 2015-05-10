/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';
import {ShoppingcartService} from '../shoppingcartService/shoppingcartService';

@Component({
    selector: 'articlecontroller',
    componentServices: [ShoppingcartService]
})
@View({templateUrl: "html_templates/articles_template.html", directives: [For]})
/* tslint:enable */
export class ArticleController {
    articles: Array<Article>;
    articleMock: ArticleResource;

    constructor() {
        this.articleMock = new ArticleResource();
        this.articles = this.articleMock.getArticles();
    }

    addArticle(article: Article): void {
        ShoppingcartService.addToCart(article.id);

        console.log("Added to Cart");
    }
}

bootstrap(ArticleController);
