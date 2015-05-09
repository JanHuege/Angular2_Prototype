/// <reference path="./angular2/angular2.d.ts"/>

import {Component,View,bootstrap,For,If} from 'angular2/angular2';
import {PersonalResource} from './employeesResource';
import {Personal} from 'employee';

@Component ({
    selector: 'personalcontroller'
})

@View ({
    templateUrl: "html_templates/personal_template.html",
    directives: [For]
})

export class PersonalController {
    personal: Personal;
    personalMock: PersonalResource = new PersonalResource();

    constructor() {
        this.personal = this.personalMock.getPersonalById(1337);
    }

    getPersonal(id: number): void {
        this.personal = this.personalMock.findPersonalById(id);
    }
}

bootstrap(PersonalController);
