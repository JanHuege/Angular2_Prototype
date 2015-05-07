/**
 * Created by Jan on 25.04.2015.
 */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleREST} from './ArticleRest';
import {ArticleController} from './ArticleController';
import {Cart} from './ShoppingcartController';
import {CustomerController} from './CustomerController';
import {PersonalController} from './PersonalController';
// not used
import {Article} from 'Article';


@Component({
    selector: 'cmp'
})
@View({
    templateUrl: "html_templates/main_template.html",
    directives: [If, For, CustomerController,  ArticleController, Cart, PersonalController]
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