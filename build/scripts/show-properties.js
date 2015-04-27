if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var DisplayComponent = (function () {
        function DisplayComponent() {
            this.myName = "Jan";
            this.names = ["Christina", "Laith", "Nazif", "Sebstian", "Marc"];
            setInterval(function () {
                this.time = (new Date()).toString();
            }.bind(this), 1000);
        }
        DisplayComponent = __decorate([
            angular2_1.Component({
                selector: 'display'
            }),
            angular2_1.View({
                template: "\n        <p> My name: {{ myName }}</p>\n        <p>Current time: {{ time }}</p>\n        <ul>\n            <li *for=\"#name of names\">\n                {{ name }}\n            </li>\n        </ul>\n        <p *if=\"names.length > 3\">You have many friends!</p>\n    ",
                directives: [angular2_1.For, angular2_1.If]
            })
        ], DisplayComponent);
        return DisplayComponent;
    })();
    angular2_1.bootstrap(DisplayComponent);
});
