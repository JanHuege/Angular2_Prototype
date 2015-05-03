/**
 * Created by Jan on 26.04.2015.
 */
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'tryout'
})

@View({
    template: `
    <h1>My first Angular 2 App</h1>
    <p>
    {{ value }}
    <p>
    <button (click)="test()" type="button" class="btn btn-primary>">Test</button>
    `
})

class AppComponent{

    value: string;

    a: string;
    b: string;

    c: number;
    d: number;

    constructor(){
        this.value = "ungleich";
        this.a = "abc";
        this.b = "abc";

        this.c = 1;
        this.d = 1;
    }

    test(){
        if((this.c == this.d) && (this.d == 1))
            this.value = "gleich";
    }

}

bootstrap(AppComponent);