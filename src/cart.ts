/**
 * Created by Jan on 27.04.2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleREST} from 'ArticleREST';

@Component({
    selector: 'cart'
})
@View({
    template: `
        <h1>Warenkorb</h1>
        <ul *for = "#art in cart">
            <li>
                {{ art.name }}
            </li>
        </ul>
        <input #articleId>
        <button (click)="addToCart(articleId.value)">Zum Warenkorb hinzufügen</button>
    `
})
class Cart{

    cart = [];
    articleMock;

    constructor(){
        this.articleMock = new ArticleREST();
        this.cart;
    }

    addToCart(id: number){
        var article = this.articleMock.getArticleById(id);

        if(article){
            this.cart.push(article);
        }

    }

    doneTyping($event){
        if($event.which === 13){
            this.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(Cart);