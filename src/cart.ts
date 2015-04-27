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
        <ul *for = "#art of cart">
            <li>
                Artikelname: {{ art.name }} Preis: {{ art.price }}
            </li>
        </ul>
        <input #texarticleid>
        <button (click)="addToCart(texarticleid.value)">Zum Warenkorb hinzufuegen</button>
        <p></p>
        <input #texdelid>
        <button (click)="deleteFromCart(texdelid.value)">Artikel aus Warenkorb loeschen</button>
    `,
    directives: [For]
})
class Cart{

    cart;
    articleMock;


    constructor(){
        this.articleMock = new ArticleREST();
        this.cart = [{id: 1, name: 'test', price: 12}];
    }

    addToCart(id: number){
        // var article = this.articleMock.getArticleById(id);
        var article = {id: 2, name: 'abc', price: 13};

        if(article){
            this.cart.push(article);
        }

    }

    deleteFromCart(delid: number) {
        this.cart.forEach(function(article){
            console.log(article.name);
            if (article.id == delid) {
                console.log("IF");
                this.cart.pop(article);
                return;
            }

        });
    }

    doneTyping($event){
        if($event.which === 13){
            this.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(Cart);