if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var AppComponent = (function () {
        function AppComponent() {
            this.value = "ungleich";
            this.a = "abc";
            this.b = "abc";
            this.c = 1;
            this.d = 1;
        }
        AppComponent.prototype.test = function () {
            if ((this.c == this.d) && (this.d == 1))
                this.value = "gleich";
        };
        AppComponent = __decorate([
            angular2_1.Component({
                selector: 'tryout'
            }),
            angular2_1.View({
                template: "\n    <h1>My first Angular 2 App</h1>\n    <p>\n    {{ value }}\n    <p>\n    <button (click)=\"test()\" type=\"button\" class=\"btn btn-primary>\">Test</button>\n    "
            })
        ], AppComponent);
        return AppComponent;
    })();
    angular2_1.bootstrap(AppComponent);
});
