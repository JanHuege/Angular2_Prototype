/**
 * Created by Jan on 24.04.2015.
 */
class Haustier{

    name = "Hund";
    alter = 5;
    test = "blah";

    rufen(){
        console.log("Komm her!" + this.name);
    }

    altern(){
        this.alter = this.alter + 1;
        console.log(this.test + "ab");
    }
}