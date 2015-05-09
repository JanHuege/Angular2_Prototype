/// <reference path="./angular2/angular2.d.ts"/>

import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {CustomerResource} from './customerResource';
import {Customer} from 'customer';

@Component({
    selector: 'customercontroller'
})
@View({
    templateUrl: "html_templates/customer_template.html",
    directives: [For]
})
export class CustomerController{
    customer: Customer;

    constructor(){
        var CustomerMock = new CustomerResource();
        this.customer = CustomerMock.getCustomerById(1);
    }

    getCustomer(id: number){
        var CustomerMock = new CustomerResource();
        var customer = CustomerMock.findCustomerById(id);
        this.customer = customer;
    }
}

bootstrap(CustomerController);