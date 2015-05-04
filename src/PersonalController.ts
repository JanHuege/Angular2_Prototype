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
    templateUrl: "html_templates/personal_template.html",
    directives: [For]
})

export class PersonalController{
    personal: personal;

    constructor(){
        var PersonalMock = new PersonalREST();
        this.personal = PersonalMock.getPersonalById(1337);
    }

    getPersonal(id: number){
        var PersonalMock = new PersonalREST();
        var personal = PersonalMock.findPersonalById(id);
        this.personal = personal;
    }
}

bootstrap(PersonalController);
