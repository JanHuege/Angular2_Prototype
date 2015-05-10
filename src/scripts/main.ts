/// <reference path="./../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleResource} from './articleService/articleResource';
import {ArticleController} from './articleService/articleController';
import {ShoppingcartController} from './shoppingcartService/shoppingcartController';
import {CustomerController} from './customerService/customerController';
import {EmployeeController} from './employeeService/employeeController';
import {Customer} from './customerService/customer';
import {CustomerResource} from './customerService/customerResource';
// not used
import {Article} from './articleService/article';


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
    customer: Customer;
    login: boolean;
    // not used
    articles: Array<Article>;


    constructor() {
        console.log("Initiated Mock_SPA");
        this.articles = [];
        this.customer = new Customer;
        this.login = false;
    }

    setlogin(id?: number): void{
        if (!this.login && id) {
            this.customer = new CustomerResource().findCustomerById(id);
            this.login = true;
        }
        else
            this.login = false;
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
