/**
 * Created by Jan on 07.05.2015.
 */
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'import',
    properties: {
        text: 'text'
    }
})
@View({
    template: `
        <h1>{{ text }}</h1>
    `
})
export class Import{
    text: string;
}

bootstrap(Import);