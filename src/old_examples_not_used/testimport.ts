/**
 * Created by Jan on 28.04.2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {testrest} from './testrest';

@Component({
    selector: 'test'
})
@View({
    template: `
        <h1>{{ name }}</h1>
    `
})
class TestClass{
    name: string;

    constructor(){
        var a = new testrest();
        this.name = a.getValue();
    }
}

bootstrap(TestClass);