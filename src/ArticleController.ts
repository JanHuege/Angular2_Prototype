import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleREST} from './ArticleRest';
import {Article} from 'Article';

@Component({
    selector: 'articlecontroller'
})
@View({
    templateUrl: "html_templates/articles_template.html",
    directives: [For]
})
export class ArticleController {

    articles;

    constructor(){
        var articleMock = new ArticleREST();
        this.articles = articleMock.getArticle();
    }

}

bootstrap(ArticleController);