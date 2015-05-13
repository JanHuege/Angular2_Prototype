/// <reference path="../../definitions/employeeService/employee.d.ts"/>

/* tslint:disable */
import {Employee} from 'employee';
/* tslint:enable */
export class EmployeeResource {

    Employees: Array<Employee> = [
        {
            id: 1,
            name: "Huege",
            firstname: "Jan",
            age: 21,
            salary: 2500,
            role: "Admin",
            tasks: "- Router ersetzen"
        },
        {
            id: 2,
            name: "Braun",
            firstname: "Christina",
            age: 22,
            salary: 2200,
            role: "Mitarbeiter",
            tasks: "- Gehalsabrechnung erstellen"
        },
        {
            id: 3,
            name: "Al - Khazrage",
            firstname: "Laith",
            age: 20,
            salary: 2200,
            role: "Mitarbeiter",
            tasks: "- Sortiment an Artikel erweitern"
        },
        {
            id: 4,
            name: "Karayel",
            firstname: "Nazif",
            age: 21,
            salary: 2200,
            role: "Mitarbeiter",
            tasks: "- Personal einstellen"
        }
    ];

    public findEmployeeById(id: number): Employee {
        var employee: Employee = null;
        this.Employees.forEach((pers: Employee) => {
            if (pers.id === (+id)) {
                employee = pers;
            }
        });
        return employee;
    }

    public getEmployeeById(id: number): Employee {
        return {
            id: id,
            name: "Mustermann",
            firstname: "Max",
            age: 35,
            salary: 0,
            role: "Mitarbeiter",
            tasks: "- Mitarbeiter entlassen"
        };
    }

    public getEmployees(): Array<Employee> {
        return this.Employees;
    }
}


