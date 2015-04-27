if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', '../ArticleRest'], function (require, exports, angular2_1, ArticleRest_1) {
    var Cart = (function () {
        // TODO Artikelklasse f�r Array <Artikel> - Done
        function Cart() {
            this.articleMock = new ArticleRest_1.ArticleREST();
            this.cart = [];
            this.value = 0;
        }
        Cart.prototype.updateValue = function () {
            var val = 0;
            this.cart.forEach(function (article) {
                val += article.price;
            });
            this.value = Math.round(val * 100) / 100;
        };
        Cart.prototype.addToCart = function (id) {
            var article = this.articleMock.findArticleById(id);
            if (article) {
                this.cart.push(article);
            }
            this.updateValue();
        };
        // TODO http://localhost:8080/build/Warenkorb Zum Testen 2 Arikel adden per hinzuf�gen und dann 2 bei l�schen eingeben und button
        Cart.prototype.deleteFromCart = function (delid) {
            var index = 0;
            var gefunden = false;
            this.cart.forEach(function (article) {
                if (article.id == delid) {
                    gefunden = true;
                }
                else if (!gefunden) {
                    index++;
                }
            });
            this.cart.splice(index, 1);
            this.updateValue();
        };
        Cart.prototype.doneTyping = function ($event) {
            if ($event.which === 13) {
                this.addToCart($event.target.value);
                $event.target.value = null;
            }
        };
        Cart = __decorate([
            angular2_1.Component({
                selector: 'cart'
            }),
            angular2_1.View({
                template: "\n        <h1>Warenkorb</h1>\n        <ul *for = \"#art of cart\">\n            <li>\n                Artikelname: {{ art.name }} Preis: {{ art.price }}\n            </li>\n        </ul>\n        <p></p>\n        Wert des Warenkorbs: {{ value }}\n        <p></p>\n        <input #texarticleid>\n        <button (click)=\"addToCart(texarticleid.value)\">Zum Warenkorb hinzufuegen</button>\n        <p></p>\n        <input #texdelid>\n        <button (click)=\"deleteFromCart(texdelid.value)\">Artikel aus Warenkorb loeschen</button>\n    ",
                directives: [angular2_1.For]
            })
        ], Cart);
        return Cart;
    })();
    angular2_1.bootstrap(Cart);
});
