/// <reference path="./angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';

@Component({selector: 'articlecontroller'})
@View({templateUrl: "html_templates/articles_template.html", directives: [For]})
/* tslint:enable */
export class ArticleController {
    articles: Array<Article>;
    list: Array<Article>;
    articleMock: ArticleResource;

    constructor() {
        this.articleMock = new ArticleResource();
        this.articles = this.articleMock.getArticles();
        this.list = [];
    }

    addArticle(article: Article): void {
        this.list.push(article);

        console.log("Added to Cart");
    }
}

bootstrap(ArticleController);
