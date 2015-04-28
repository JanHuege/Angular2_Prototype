/**
 * Created by Jan and Laith on 27.04.2015.
 */

import {Customer} from 'Customer';

export class CustomerREST {

    customers: Array<Customer> = [
        {
            id: 1,
            name: 'Fowler',
            firstname: 'Martin',
            age: 17

        },
        {
            id: 2,
            name: 'Bien',
            firstname: 'Adam',
            age: 21
        },
        {
            id: 3,
            name: 'Kent',
            firstname: 'Clarke',
            age: 21
        }
    ];

    findCustomerById(id: number) : Customer {
        var customer = null;
        this.customers.forEach(function(cust: Customer) {
            if(cust.id == id) {
                customer = cust;
            }
        });
        return customer;
    }

    getCustomerById(id: number) {
        return {
            id: id,
            name: 'Mustermann',
            firstname: 'Max',
            age: 35
        }
    }

    getCustomers() {
        return this.customers;
    }
}


