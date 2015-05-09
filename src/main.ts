/// <reference path="./angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleResource} from './articleResource';
import {ArticleController} from './articleController';
import {ShoppingcartController} from './shoppingcartController';
import {CustomerController} from './customerController';
import {EmployeeController} from './employeeController';
// not used
import {Article} from 'article';


@Component({
    selector: 'cmp'
})
@View({
    templateUrl: "html_templates/main_template.html",
    directives: [If, For, CustomerController,  ArticleController, ShoppingcartController, EmployeeController]
})
/* tslint:enable */
class MyCmp {
    article: Article;
    // not used
    articles: Array<Article>;

    constructor() {
        console.log("Initiated Mock_SPA");
        this.articles = [];
   }

    // not used
    setArticles(list: Array<Article>): void {
        this.articles = list;
    }

    // not used
    getArticles(): Array<Article> {
        return this.articles;
    }

    blend(value: string): String {
        if (value === "") {
            return "";
        }
        return "none";
    }

    showIndex(): boolean {
        return false;
    }

    hideIndex(): boolean {
        return true;
    }

    show(): boolean {
        return true;
    }

    hide(): boolean {
        return false;
    }

}

bootstrap(MyCmp);
