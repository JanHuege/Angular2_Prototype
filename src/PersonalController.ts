/**
 * Created by Nazif on 28.04.2015.
 */

import {Component,View,bootstrap,For,If} from 'angular2/angular2';
import {PersonalREST} from './PersonalRest';
import {personal} from 'Personal';

@Component ({
    selector: 'personalcontroller'
})

@View ({
    /*
    template: `
        <h1>Personalverwaltung von {{ personal.firstname }} {{ personal.name }} als {{personal.role}}</h1>
         <p>
            <h3>Vorname: {{ personal.firstname }}</h3><br>
            <h3>Nachname: {{ personal.name }}</h3><br>
            <h3>Rolle: {{ personal.role }}</h3><br>
        </p>
        <p>
            <input #personalid/>
            <button (click)="getPersonal(personalid.value)">Finde Personal</button>
        </p>
    `,
    */
    templateUrl: "html_templates/personal_template.html",
    directives: [For]
})

class personalController{
    personal: personal;

    constructor(){
        var PersonalMock = new PersonalREST();
        this.personal = PersonalMock.getPersonalById(1);
    }

    getPersonal(id: number){
        var PersonalMock = new PersonalREST();
        var personal = PersonalMock.findPersonalById(id);
        this.personal = personal;
    }
}

bootstrap(personalController);
