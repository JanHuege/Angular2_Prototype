/// <reference path="./../../angular2/angular2.d.ts"/>
/// <reference path="../../definitions/employeeService/employee.d.ts"/>
/// <reference path="../../definitions/employeeService/employeeResource.d.ts"/>

/* tslint:disable */
import {Component,View,bootstrap,For,If} from 'angular2/angular2';
import {EmployeeResource} from './employeeResource';
import {Employee} from 'employee';

@Component ({
    selector: 'employeecontroller'
})

@View ({
    templateUrl: "html_templates/employee_template.html",
    directives: [For]
})
/* tslint:enable */
export class EmployeeController {
    employee: Employee;
    employeeMock: EmployeeResource = new EmployeeResource();

    constructor() {
        this.employee = this.employeeMock.getEmployeeById(1337);
    }

    public getPersonal(id: number): void {
        this.employee = this.employeeMock.findEmployeeById(id);
    }

    public getTasks(): void {
        alert("Die Aufgabe vom 10.05.2015  " +  this.employee.tasks  + " muss bis zum 20.05.2015 erledigt sein!");
    }
}

bootstrap(EmployeeController);
