/**
 * Created by Jan on 24.04.2015.
 */
var Haustier = (function () {
    function Haustier() {
        this.name = "Hund";
        this.alter = 5;
        this.test = "blah";
    }
    Haustier.prototype.rufen = function () {
        console.log("Komm her!" + this.name);
    };
    Haustier.prototype.altern = function () {
        this.alter = this.alter + 1;
        console.log(this.test + "ab");
    };
    return Haustier;
})();
