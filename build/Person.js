define(["require", "exports"], function (require, exports) {
    //import angular2 = require('../node_modules/angular2/angular2')
    var Person = (function () {
        function Person() {
            this.firstName = "Jan";
            this.lastName = "Huege";
            this.age = "21";
        }
        Person.prototype.attack = function () {
            console.log("Yo!");
            this.firstName = "Christina";
            this.lastName = "Braun";
            this.age = "22";
        };
        Person.prototype.foo = function () {
            console.log(this);
        };
        Person.prototype.change = function () {
            console.log("TEST1234");
        };
        return Person;
    })();
});
