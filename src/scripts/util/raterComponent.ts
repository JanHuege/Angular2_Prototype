/// <reference path="./../../angular2/angular2.d.ts"/>

/* tslint:disable */
import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'rater',
    properties: { max: 'max', value: 'value'}
})
@View({
    templateUrl: 'html_templates/rater_template.html',
    directives: [NgFor]
})
/* tslint:enable */
export class Rater {

    value: number;

    arrayify(i: number): Array<number> {
        return Array(i);
    }
    select(index: number): void {
        this.value = index + 1;
    }
}

/*
export class Rater {
    stars = [1, 2, 3, 4, 5];
    displayRating;
    rating;

    rate(rating) {
        this.rating = rating;
        this.displayRating = rating;
    }

    highlight(rating) {
        this.displayRating = rating;
    }

    showSavedRating() {
        this.displayRating = this.rating;
    }

}
*/
