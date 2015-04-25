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
define(["require", "exports", "angular2/angular2"], function (require, exports, angular2_1) {
    var MyCmp = (function () {
        function MyCmp() {
            this.noTodos = ["hello"];
        }
        MyCmp.prototype.addNoTodo = function (noTodo) {
            this.noTodos.push(noTodo);
        };
        MyCmp = __decorate([
            angular2_1.Component({
                selector: 'cmp'
            }),
            angular2_1.View({
                template: "\n    <h1>Not todo</h1>\n    <ul *for=\"#noTodo of noTodos\">\n      <li>\n        {{ noTodo }}\n      </li>\n    </ul>\n    <input #textbox>\n    <button (click)=\"addNoTodo(textbox.value)\"><span class=\"glyphicon glyphicon-pencil\"></span>Add</button>\n    ",
                directives: [angular2_1.For]
            })
        ], MyCmp);
        return MyCmp;
    })();
    angular2_1.bootstrap(MyCmp);
});
