/// <reference path="./../../angular2/angular2.d.ts"/>

/* tslint:disable */
import {Component,View,bootstrap,For,If} from 'angular2/angular2';

@Component({
    selector: 'home'
})
@View({
    templateUrl: "html_templates/home_template.html"
})
/* tslint:enable */
export class HomeController {}

bootstrap(HomeController);
