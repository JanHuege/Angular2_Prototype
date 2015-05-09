import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';

@Component({selector: 'articlecontroller'})
@View({templateUrl: "html_templates/articles_template.html", directives: [For]})
export class ArticleController {
    articles;
    list: Array<Article>;

    constructor() {
        var articleMock = new ArticleResource();
        this.articles = articleMock.getArticle();
        this.list = [];
    }

    addArticle(article: Article) {
        this.list.push(article);

        console.log("Added to Cart");
    }
}

bootstrap(ArticleController);