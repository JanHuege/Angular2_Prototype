/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/shoppingcartService/orderItem.d.ts"/>
/// <reference path="../../definitions/shoppingcartService/shoppingcartService.d.ts"/>

/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {OrderItem} from './orderItem';
import {ShoppingcartService} from './shoppingcartService';
import {CustomerService} from '../customerService/customerService'

@Component({
    selector: 'cart',
    componentServices: [ShoppingcartService, CustomerService]
})
@View({
    templateUrl: "html_templates/shoppingcart_template.html",
    directives: [For, If]
})
/* tslint:enable */
export class ShoppingcartController {

    public getItems(): List<OrderItem> {
        return ShoppingcartService.get();
    }

    public calculateTotal(): number {
        return ShoppingcartService.calculateTotal();
    }

    public addToCart(id: number): void {
        ShoppingcartService.addToCart(id);
    }

    public deleteFromCart(delid: number): void {
        ShoppingcartService.deleteFromCart(delid);
    }

    emptyCart(): void {
        if (CustomerService.loggedIn()) {
            ShoppingcartService.emptyCart();
        }
        else {
            alert("You must be logged in!");
        }
    }

    public doneTyping($event: any): void {
        if ($event.which === 13) {
            ShoppingcartService.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(ShoppingcartController);
