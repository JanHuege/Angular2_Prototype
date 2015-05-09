/// <reference path="./angular2/angular2.d.ts"/>

import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';

@Component({
    selector: 'cart',
    properties: {
        cart: 'cart'
    }
})
@View({
    templateUrl: "html_templates/shoppingcart_template.html",
    directives: [For]
})
export class ShoppingcartController{

    cart: Array <Article>;
    articleMock;

    constructor(){
        this.articleMock = new ArticleResource();
        this.cart = [];
    }

    calculateTotal(){
        var val = 0;
        this.cart.forEach(function(article){
           val += article.price;
        });
        return Math.round(val*100)/100;
    }

    addToCart(id: number){
        var article = this.articleMock.findArticleById(id);

        if(article){
            this.cart.push(article);
        }
    }

    // TODO Arrowfunctions
    deleteFromCart(delid: number) {
        var index = 0;
        var gefunden = false;
        this.cart.forEach(article =>{
            if (article.id == delid) {
                gefunden = true;
            }
            else if(!gefunden){
                index++;
            }
        });
        this.cart.splice(index, 1);
    }

    // TODO Sinnvolle Implementierung und Fix finden warum for ... of nicht richtig geht nur mit +100
    emptyCart(){
        alert("Bestellung im Wert von " + this.calculateTotal() + "\u20AC erfolgreich! \n" +
        this.toString());
        for(var i = 0; i <this.cart.length + 100; i++){
            for(var art of this.cart){
                this.deleteFromCart(art.id);
            }
        }
    }

    toString(){
        var s = "";
        this.cart.forEach(function(article){
            s += article.id + " " + article.name + " " + article.price + "\u20AC \n";
        });
        return s;
    }

    doneTyping($event){
        if($event.which === 13){
            this.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(ShoppingcartController);