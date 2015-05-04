/**
 * Created by Jan on 25.04.2015.
 */
import {Component, bootstrap, View, For} from "angular2/angular2";
import {ArticleREST} from './ArticleRest';
import {Cart} from './ShoppingcartController';
import {CustomerController} from './CustomerController';
import {PersonalController} from './PersonalController';

@Component({
    selector: 'cmp'
})
@View({
    templateUrl: "html_templates/main_template.html",
    directives: [For, CustomerController, Cart, PersonalController]
})
class MyCmp {
    article;
    articles;

    constructor() {
        
   }

}

bootstrap(MyCmp);