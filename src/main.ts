/**
 * Created by Jan on 25.04.2015.
 */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleResource} from './articleResource';
import {ArticleController} from './articleController';
import {ShoppingcartController} from './shoppingcartController';
import {CustomerController} from './customerController';
import {PersonalController} from './personalController';
// not used
import {Article} from 'article';


@Component({
    selector: 'cmp'
})
@View({
    templateUrl: "html_templates/main_template.html",
    directives: [If, For, CustomerController,  ArticleController, ShoppingcartController, PersonalController]
})
class MyCmp {
    article;
    // not used
    articles: Array<Article>;

    constructor() {
        console.log("Initiated Mock_SPA");
        this.articles = [];
   }

    // not used
    setArticles(list: Array<Article>){
        this.articles = list;
    }

    //not used
    getArticles(){
        return this.articles;
    }

    blend(value:string){
        if (value === "")
            return "";
        else
            return "none";
    }

    showIndex(): boolean{
        return false;
    }

    hideIndex(): boolean{
        return true;
    }

    show(): boolean{
        return true;
    }

    hide(): boolean{
        return false;
    }

}

bootstrap(MyCmp);