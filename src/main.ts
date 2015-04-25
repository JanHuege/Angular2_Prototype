/**
 * Created by Jan on 25.04.2015.
 */


import {Component, bootstrap, View, For} from "angular2/angular2";

@Component({
    selector: 'cmp'
})
@View({
    template: `
    <h1>Not todo</h1>
    <ul *for="#noTodo of noTodos">
      <li>
        {{ noTodo }}
      </li>
    </ul>
    <input #textbox>
    <button (click)="addNoTodo(textbox.value)"><span class="glyphicon glyphicon-pencil"></span>Add</button>
    `,
    directives: [For]
})
class MyCmp {
    noTodos: string[];

    constructor() {
        this.noTodos = ["hello"];
    }

    addNoTodo(noTodo: string) {
        this.noTodos.push(noTodo);
    }
}

bootstrap(MyCmp);