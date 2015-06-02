/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/customerService/customer.d.ts"/>
/// <reference path="../../definitions/customerService/customerService.d.ts"/>
/// <reference path="../../definitions/customerService/customerResource.d.ts"/>

/* tslint:disable */
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {CustomerResource} from './customerResource';
import {Customer} from './customer';
import {CustomerService} from './customerService';

@Component({
    selector: 'customercontroller',
    properties: {
        customer: 'customer'
    },
    componentServices: [CustomerService]
})
@View({
    templateUrl: "html_templates/customer_template.html",
    directives: [NgFor, NgIf]
})
/* tslint:enable */
export class CustomerController {
    // customer: Customer;
    // customerMock: CustomerResource;
    isEditing: boolean;

    constructor() {
        console.log("constructor: CustomerController");
        // this.customerMock = new CustomerResource();
        // this.customer = this.customerMock.getCustomerById(1);
        this.isEditing = false;
    }

    public getCustomer(): Customer {
        var customer: Customer = CustomerService.getCustomer();
        if (customer == null) {
            return new Customer();
        }
        return customer;
    }

    /*
     public getCustomer(id: number): void {
        this.customer = this.customerMock.findCustomerById(id);
    }
    */

    public editStart(): void {
        this.isEditing = true;
    }

    public saveChanges(vorname: string, name: string, age: number): void {
        CustomerService.saveChanges(vorname, name, age);
        this.isEditing = false;
    }
}
