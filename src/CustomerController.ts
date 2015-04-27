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

    `,
    directives: [For]
})
class CustomerController{
    customer: Customer;

    constructor(){
        var CustomerMock = new CustomerREST();
        this.customer = CustomerMock.getCustomerById(1);
    }
}

bootstrap(CustomerController);