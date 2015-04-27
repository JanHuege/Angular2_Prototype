/**
 * Created by Jan and Laith on 27.04.2015.
 */
define(["require", "exports"], function (require, exports) {
    var CustomerREST = (function () {
        function CustomerREST() {
            this.customers = [
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
        }
        CustomerREST.prototype.findCustomerById = function (id) {
            var customer = null;
            this.customers.forEach(function (cust) {
                if (cust.id == id) {
                    customer = cust;
                }
            });
            return customer;
        };
        CustomerREST.prototype.getCustomerById = function (id) {
            return {
                id: id,
                name: 'Mustermann',
                firstname: 'Max',
                age: 35
            };
        };
        CustomerREST.prototype.getArticle = function () {
            return this.customers;
        };
        return CustomerREST;
    })();
    exports.CustomerREST = CustomerREST;
});
