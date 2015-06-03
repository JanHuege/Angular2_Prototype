/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/employeeService/employee.d.ts"/>
/// <reference path="../../definitions/employeeService/employeeResource.d.ts"/>
/// <reference path="../../../typings/lodash/lodash.d.ts" />

/* tslint:disable */
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {EmployeeResource} from './employeeResource';
import {Employee} from 'employee';
//import _ = require('lodash.min');

@Component ({
    selector: 'employeecontroller'
})

@View ({
    templateUrl: "html_templates/employee_template.html",
    directives: [NgFor]
})
/* tslint:enable */
export class EmployeeController {
    employee: Employee;
    employeeMock: EmployeeResource = new EmployeeResource();

    constructor() {
        console.log("constructor: EmployeeController");
        this.employee = this.employeeMock.getEmployeeById(1337);
        // console.log(_.isNonEmptyString(''));
    }

    public getPersonal(id: number): void {
        this.employee = this.employeeMock.findEmployeeById(id);
    }

    public getTasks(): void {
        alert("Die Aufgabe vom 10.05.2015  " +  this.employee.tasks  + " muss bis zum 20.05.2015 erledigt sein!");
    }
}
