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
import {Component, bootstrap, View, NgFor, NgIf} from 'angular2/angular2';
import {ArticleResource} from './articleService/articleResource';
import {ArticleController} from './articleService/articleController';
import {ShoppingcartController} from './shoppingcartService/shoppingcartController';
import {CustomerController} from './customerService/customerController';
import {EmployeeController} from './employeeService/employeeController';
import {Customer} from './customerService/customer';
import {CustomerResource} from './customerService/customerResource';
import {CustomerService} from './customerService/customerService';
import {HomeController} from './homeService/homeController'
import {Article} from './articleService/article';
import {Footer} from './util/footerComponent';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';

@Component({
    selector: 'app',
    componentServices: [CustomerService]
})
@RouteConfig([
    { path: '/', component: HomeController },
    { path: '/Katalog', component: ArticleController, as:'article'},
    { path: '/Warenkorb', component: ShoppingcartController, as:'cart'},
    { path: '/Profil', component: CustomerController, as:'customer'},
    { path: '/Personalverwaltung', component: EmployeeController, as:'employee'},
    { path: '/Startseite', component: HomeController, as:'index'}
])
@View({
    templateUrl: "html_templates/app_template.html",
    directives: [NgIf, NgFor, CustomerController,  ArticleController, ShoppingcartController, EmployeeController, RouterOutlet, RouterLink, Footer]
})
/* tslint:enable */
class App {

    article: Article;
    articles: Array<Article>;
    // Blendattributes
    index: string;
    cart: string;
    customer: string;
    employee: string;
    item: string;

    constructor() {
        console.log("constructor: App");
        this.articles = [];
        this.index = "";
        this.cart = "none";
        this.customer = "none";
        this.employee = "none";
        this.item = "none";
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

    public setArticles(list: Array<Article>): void {
        this.articles = list;
    }

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

    public blendNew(value: number): void {
        if (value === 0) {
            this.index = "";
            this.item = "none";
            this.customer = "none";
            this.employee = "none";
            this.cart = "none";
        } else if (value === 1) {
            this.index = "none";
            this.item = "";
            this.customer = "none";
            this.employee = "none";
            this.cart = "none";
        } else if (value === 2) {
            this.index = "none";
            this.item = "none";
            this.customer = "none";
            this.employee = "none";
            this.cart = "";
        } else if (value === 3) {
            this.index = "none";
            this.item = "none";
            this.customer = "";
            this.employee = "none";
            this.cart = "none";
        } else if (value === 4) {
            this.index = "none";
            this.item = "none";
            this.customer = "none";
            this.employee = "none";
            this.cart = "none";
        }
    }

}

bootstrap(App, [routerInjectables]);
