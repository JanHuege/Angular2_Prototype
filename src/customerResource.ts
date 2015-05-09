/**
 * Created by Jan and Laith on 27.04.2015.
 */
/* tslint:disable */
import {Customer} from 'customer';
/* tslint:enable */
export class CustomerResource {

    customers: Array<Customer> = [
        {
            id: 1,
            name: "Fowler",
            firstname: "Martin",
            age: 17

        },
        {
            id: 2,
            name: "Bien",
            firstname: "Adam",
            age: 21
        },
        {
            id: 3,
            name: "Kent",
            firstname: "Clarke",
            age: 21
        }
    ];

    findCustomerById(id: number): Customer {
        var customer: Customer = null;
        this.customers.forEach(function(cust: Customer): void {
            if (cust.id === id) {
                customer = cust;
            }
        });
        return customer;
    }

    getCustomerById(id: number): Customer {
        return {
            id: id,
            name: "Mustermann",
            firstname: "Max",
            age: 35
        };
    }

    getCustomers(): Array<Customer> {
        return this.customers;
    }
}


