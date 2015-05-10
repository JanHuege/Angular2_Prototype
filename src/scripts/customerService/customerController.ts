/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
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
/* tslint:enable */
export class CustomerController {
    customer: Customer;
    customerMock: CustomerResource;

    constructor() {
        this.customerMock = new CustomerResource();
        this.customer = this.customerMock.getCustomerById(1);
    }

    getCustomer(id: number): void {
        this.customer = this.customerMock.findCustomerById(id);
    }
}

bootstrap(CustomerController);
