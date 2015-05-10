/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {OrderItem} from './orderItem';
import {ShoppingcartService} from './shoppingcartService'

@Component({
    selector: 'cart',
    componentServices: [ShoppingcartService]
})
@View({
    templateUrl: "html_templates/shoppingcart_template.html",
    directives: [For, If]
})
/* tslint:enable */
export class ShoppingcartController {

    getItems(): List<OrderItem> {
        return ShoppingcartService.get();
    }

    calculateTotal(): number {
        return ShoppingcartService.calculateTotal();
    }

    addToCart(id: number): void {
        ShoppingcartService.addToCart(id);
    }

    deleteFromCart(delid: number): void {
        ShoppingcartService.deleteFromCart(delid);
    }

    emptyCart(): void {
        ShoppingcartService.emptyCart();
    }

    doneTyping($event): void {
        if ($event.which === 13) {
            ShoppingcartService.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(ShoppingcartController);

