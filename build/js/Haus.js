/**
 * Created by Jan on 24.04.2015.
 */
var Haus = (function () {
    function Haus() {
        this.baujahr = 1993;
    }
    Haus.prototype.foo = function () {
        this.baujahr += 2;
        console.log(this.baujahr.toString());
    };
    return Haus;
})();
