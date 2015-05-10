import {CustomerResource} from './customerResource';
import {Customer} from './customer';

var customerResource: CustomerResource = new CustomerResource();
var customer: Customer;

export let CustomerService = {

    login(id: number): boolean {
        customer = customerResource.findCustomerById(id);
        return true;
    },

    loggedIn(): boolean {
        return customer != null;
    },

    getCustomer(): Customer {
        return customer;
    },

    saveChanges(vorname: string, name: string, age: number): void {
        customer = customerResource.updateCustomer(customer.id, name, vorname, age);
    }

};