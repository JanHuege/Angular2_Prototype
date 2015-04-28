/**
 * Created by Jan and Laith on 27.04.2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {CustomerREST} from 'CustomerRest';
import {Customer} from 'Customer';

@Component({
    selector: 'customercontroller'
})
@View({
    template: `
        <h1>Kundenverwaltung von {{ customer.firstname }} {{ customer.name }}</h1>
        <p>
            <h3>Vorname: {{ customer.firstname }}</h3><br>
            <h3>Nachname: {{ customer.name }}</h3><br>
            <h3>Alter: {{ customer.age }}</h3><br>
        </p>
        <p>
            <input #customerid/>
            <button (click)="getCustomer(customerid.value)">Finde Kunden</button>
        </p>
    `,
    directives: [For]
})
class CustomerController{
    customer: Customer;

    constructor(){
        var CustomerMock = new CustomerREST();
        this.customer = CustomerMock.getCustomerById(1);
    }

    getCustomer(id: number){
        var CustomerMock = new CustomerREST();
        var customer = CustomerMock.findCustomerById(id);
        this.customer = customer;
    }
}

bootstrap(CustomerController);