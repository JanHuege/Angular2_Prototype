/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
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

    //TODO wenn niemand eingeloggt ist muss ein leerer Kunde zurückgegeben werden (ansonsten Fehler in HTML...)
    getCustomer(): Customer {
        var customer: Customer = CustomerService.getCustomer();
        if (customer == null) {
            return new Customer();
        }
        return customer;
    }

    //TODO allgemeine Kundenverwaltung funktioniert im Moment nicht; wohin?
/*    getCustomer(id: number): void {
        this.customer = this.customerMock.findCustomerById(id);
    }*/

    editStart(): void {
        this.isEditing = true;
    }

    saveChanges(vorname: string, name: string, age: number): void {
        CustomerService.saveChanges(vorname, name, age);
        this.isEditing = false;
    }
}

bootstrap(CustomerController);
