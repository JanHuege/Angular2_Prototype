/**
 * Created by Jan on 25.04.2015.
 */
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "angular2/angular2", 'ArticleREST'], function (require, exports, angular2_1, ArticleREST_1) {
    var MyCmp = (function () {
        function MyCmp() {
            this.noTodos = ["hello"];
            var articleREST = new ArticleREST_1.ArticleREST();
            this.articles = articleREST.getArticle();
            this.article = articleREST.getArticleById(101);
        }
        MyCmp.prototype.addNoTodo = function (noTodo) {
            this.noTodos.push(noTodo);
        };
        MyCmp = __decorate([
            angular2_1.Component({
                selector: 'cmp'
            }),
            angular2_1.View({
                template: "\n    <h1>Rockstar-Shop :)</h1>\n    <ul *for=\"#art of articles\">\n      <li>Artikelname {{ art.name }}</li>\n      <li>Artikelnummer: {{ art.id }}</li>\n      <li>Preis: {{ art.price }}</li>\n      <li>Beschreibung:\n        {{ art.description }}\n      </li>\n    </ul>\n\n    <h2>Todo</h2>\n    <ul *for=\"#todo of noTodos\">\n        <li>{{ todo }}</li>\n    </ul>\n\n    <input #textbox>\n    <button (click)=\"addNoTodo(textbox.value)\">Add</button>\n    ",
                directives: [angular2_1.For]
            })
        ], MyCmp);
        return MyCmp;
    })();
    angular2_1.bootstrap(MyCmp);
});
