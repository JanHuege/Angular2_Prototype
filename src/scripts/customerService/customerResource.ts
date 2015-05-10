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
        this.customers.forEach((cust: Customer) => {
            if (cust.id == id) {
                customer = cust;
            }
        });
        return customer;
    }

    getCustomerById(id: number): Customer {
        if (id === 101)
            return {
                id: id,
                name: "Mustermann",
                firstname: "Maxi",
                age: 35
            };
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

    updateCustomer(id: number, name: string, firstname: string, age: number): Customer {
        var customer: Customer = this.findCustomerById(id);
        if(customer != null) {
            customer.name = name;
            customer.firstname = firstname;
            customer.age = age;
        }
        return customer;
    }
}


