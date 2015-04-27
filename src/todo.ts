/**
 * Created by Jan on 26.04.2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
    selector: 'todo'
})

@View({
    template: `
        <ul>
            <li *for="#todo of todos">
                {{ todo }}
            </li>
        </ul>
        <p>
        <input #todotext>
        <button (click)="addTodo(todotext.value)">Add ToDo</button>
    `,
    directives: [For]
})

class TodoList{

    todos: Array<string>;

    constructor(){
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }

    addTodo(todo: string){
        this.todos.push(todo);
    }

    doneTyping($event){
        if($event.which === 13){
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    }
}

bootstrap(TodoList);