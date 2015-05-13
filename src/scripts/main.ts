/// <reference path="./../angular2/angular2.d.ts"/>
/// <reference path="../definitions/shoppingcartService/shoppingcartController.d.ts"/>
/// <reference path="../definitions/customerService/customerController.d.ts"/>
/// <reference path="../definitions/employeeService/employeeController.d.ts"/>
/// <reference path="../definitions/customerService/customer.d.ts"/>
/// <reference path="../definitions/customerService/customerResource.d.ts"/>
/// <reference path="../definitions/customerService/customerService.d.ts"/>
/// <reference path="../definitions/articleService/articleResource.d.ts"/>
/// <reference path="../definitions/articleService/articleController.d.ts"/>

/// <reference path="../definitions/articleService/article.d.ts"/>

/* tslint:disable */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleResource} from './articleService/articleResource';
import {ArticleController} from './articleService/articleController';
import {ShoppingcartController} from './shoppingcartService/shoppingcartController';
import {CustomerController} from './customerService/customerController';
import {EmployeeController} from './employeeService/employeeController';
import {Customer} from './customerService/customer';
import {CustomerResource} from './customerService/customerResource';
import {CustomerService} from './customerService/customerService';
// not used
import {Article} from './articleService/article';


@Component({
    selector: 'cmp',
    componentServices: [CustomerService]
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

    public setlogin(id: number): void {
        CustomerService.login(id);
    }

    public loggedIn(): boolean {
        return CustomerService.loggedIn();
    }

    public getCustomer(): Customer {
        return CustomerService.getCustomer();
    }

    // not used
    public setArticles(list: Array<Article>): void {
        this.articles = list;
    }

    // not used
    public getArticles(): Array<Article> {
        return this.articles;
    }

    public blend(value: string): String {
        if (value === "") {
            return "";
        }
        return "none";
    }

    public showIndex(): boolean {
        return false;
    }

    public hideIndex(): boolean {
        return true;
    }

    public show(): boolean {
        return true;
    }

    public hide(): boolean {
        return false;
    }

}

bootstrap(MyCmp);
