/**
 * Created by Jan on 26.04.2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
    selector: 'display'
})

@View({
    template: `
        <p> My name: {{ myName }}</p>
        <p>Current time: {{ time }}</p>
        <ul>
            <li *for="#name of names">
                {{ name }}
            </li>
        </ul>
        <p *if="names.length > 3">You have many friends!</p>
    `,
    directives: [For, If]
})

class DisplayComponent{

    myName: string;
    names: Array<string>;
    time: Date;

    constructor(){
        this.myName = "Jan";
        this.names = ["Christina", "Laith", "Nazif", "Sebstian", "Marc"];

        setInterval(function(){
            this.time = (new Date()).toString();
        }.bind(this), 1000);
    }
}

bootstrap(DisplayComponent);