/**
 * Created by Jan on 07.05.2015.
 */
/* tslint:disable */
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
/* tslint:enable */
export class Import {
    text: string;
}

bootstrap(Import);
