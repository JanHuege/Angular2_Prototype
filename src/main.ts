/**
 * Created by Jan on 25.04.2015.
 */
import {Component, bootstrap, View, For, If} from "angular2/angular2";
import {ArticleREST} from './ArticleRest';
import {Cart} from './ShoppingcartController';
import {CustomerController} from './CustomerController';
import {PersonalController} from './PersonalController';
import {ArticleController} from './ArticleController';

@Component({
    selector: 'cmp'
})
@View({
    templateUrl: "html_templates/main_template.html",
    directives: [If, For, CustomerController, Cart, PersonalController, ArticleController]
})
class MyCmp {
    article;
    articles;

    constructor() {
        console.log("Initiated Mock_SPA");
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