/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {CustomerResource} from './customerResource';
import {Customer} from 'customer';

@Component({
    selector: 'customercontroller',
    properties: {
        customer: 'customer'
    }
})
@View({
    templateUrl: "html_templates/customer_template.html",
    directives: [For, If]
})
/* tslint:enable */
export class CustomerController {
    customer: Customer;
    customerMock: CustomerResource;
    isEditing: boolean;

    constructor() {
        this.customerMock = new CustomerResource();
        this.customer = this.customerMock.getCustomerById(1);
        this.isEditing = false;
    }

    getCustomer(id: number): void {
        this.customer = this.customerMock.findCustomerById(id);
    }

    editStart(): void {
        this.isEditing = true;
    }

    saveChanges(vorname: String, name: String, age: number): void {
        this.customer.firstname = vorname;
        this.customer.name = name;
        this.customer.age = age;
        this.isEditing = false;
    }
}

bootstrap(CustomerController);
