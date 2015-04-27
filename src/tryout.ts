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
    <button type="button" class="btn btn-primary>">Test</button>
    `
})

class AppComponent{

}

bootstrap(AppComponent);