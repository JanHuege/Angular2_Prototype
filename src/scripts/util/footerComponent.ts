/// <reference path="./../../angular2/angular2.d.ts"/>

/* tslint:disable */
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'footer'
})
@View({
    templateUrl: 'html_templates/footer_template.html'
})
/* tslint:enable */
export class Footer {

    constructor() {
        console.log("constructor: Footer");
    }
}
