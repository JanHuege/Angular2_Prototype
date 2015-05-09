/**
 * Created by Nazif on 28.04.2015.
 */

import {Employee} from 'employee';

export class EmployeeResource {

    Personals: Array<Employee> = [
        {
            id: 1,
            name: "Huege",
            firstname: "Jan",
            age: 21,
            gehalt: 2500,
            role: "Admin"

        },
        {
            id: 2,
            name: "Braun",
            firstname: "Christina",
            age: 22,
            gehalt: 2200,
            role: "Mitarbeiter"
        },
        {
            id: 3,
            name: "Al - Khazrage",
            firstname: "Laith",
            age: 20,
            gehalt: 2200,
            role: "Mitarbeiter"
        },
        {
            id: 4,
            name: "Karayel",
            firstname: "Nazif",
            age: 21,
            gehalt: 2200,
            role: "Mitarbeiter"
        }
    ];

    findPersonalById(id: number): Employee {
        var personal: Employee = null;
        this.Personals.forEach(function(pers: Employee) {
            if (pers.id === id) {
                personal = pers;
            }
        });
        return personal;
    }

    getPersonalById(id: number): Employee {
        return {
            id: id,
            name: "Mustermann",
            firstname: "Max",
            age: 35,
            gehalt: 0,
            role: "Mitarbeiter"
        };
    }

    getPersonals(): Array<Employee> {
        return this.Personals;
    }
}


