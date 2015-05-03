if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', './CustomerRest'], function (require, exports, angular2_1, CustomerRest_1) {
    var CustomerController = (function () {
        function CustomerController() {
            var CustomerMock = new CustomerRest_1.CustomerREST();
            this.customer = CustomerMock.getCustomerById(1);
        }
        CustomerController.prototype.getCustomer = function (id) {
            var CustomerMock = new CustomerRest_1.CustomerREST();
            var customer = CustomerMock.findCustomerById(id);
            this.customer = customer;
        };
        CustomerController = __decorate([
            angular2_1.Component({
                selector: 'customercontroller'
            }),
            angular2_1.View({
                /*template: `
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
                */
                templateUrl: "html_templates/customer_template.html",
                directives: [angular2_1.For]
            })
        ], CustomerController);
        return CustomerController;
    })();
    angular2_1.bootstrap(CustomerController);
});
