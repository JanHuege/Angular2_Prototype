/**
 * Created by Jan on 07.05.2015.
 */
/* tslint:disable */
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'export'
})
@View({
    template: `
    <div [style.background-color]="ref.value">
        <input #ref (keyup)="changeText(ref.value)">
    </div>
    `,
    directives: []
})
/* tslint:enable */
export class Export {
    textex: string;

    constructor() {
        this.textex = "exportiert";
    }

    changeText(value: string): void {
        this.textex = value;
    }
}

bootstrap(Export);
