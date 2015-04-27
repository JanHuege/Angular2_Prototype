/**
 * Created by Jan on 25.04.2015.
 */


import {Component, bootstrap, View, For} from "angular2/angular2";
import {ArticleREST} from 'ArticleREST';

@Component({
    selector: 'cmp'
})
@View({
    template: `
    <h1>Rockstar-Shop :)</h1>
    <ul *for="#art of articles">
      <li>Artikelname {{ art.name }}</li>
      <li>Artikelnummer: {{ art.id }}</li>
      <li>Preis: {{ art.price }}</li>
      <li>Beschreibung:
        {{ art.description }}
      </li>
    </ul>

    <h2>Todo</h2>
    <ul *for="#todo of noTodos">
        <li>{{ todo }}</li>
    </ul>

    <input #textbox>
    <button (click)="addNoTodo(textbox.value)">Add</button>
    `,
    directives: [For]
})
class MyCmp {
    noTodos: string[];
    article;
    articles;

    constructor() {
        this.noTodos = ["hello"];

        var articleREST = new ArticleREST();
        this.articles = articleREST.getArticle();
        this.article = articleREST.getArticleById(101);

   }

    addNoTodo(noTodo: string) {
        this.noTodos.push(noTodo);
    }
}

bootstrap(MyCmp);