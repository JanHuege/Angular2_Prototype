/**
 * Created by Jan on 07.05.2015.
 */
/* tslint:disable */
import {Component, View, bootstrap} from 'angular2/angular2';
import {Import} from './testimport';
import {Export} from './testexport';

@Component({
    selector: 'test'
})
@View({
    template: `
        <h1>Zu exportierender Text:</h1><br>

        <export #textexport></export><br>

        <h1>Importierter Text:</h1><br>

        <import [text]="textexport.textex"></import>
    `,
    directives: [Import, Export]
})
/* tslint:enable */
class Test{

}

bootstrap(Test);
