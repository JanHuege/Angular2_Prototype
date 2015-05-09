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

export class PersonalController{
    personal: Personal;

    constructor(){
        var PersonalMock = new PersonalResource();
        this.personal = PersonalMock.getPersonalById(1337);
    }

    getPersonal(id: number){
        var PersonalMock = new PersonalResource();
        var personal = PersonalMock.findPersonalById(id);
        this.personal = personal;
    }
}

bootstrap(PersonalController);
