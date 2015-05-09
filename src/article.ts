/**
 * Created by Christina on 27.04.2015.
 */

export class Article {
    img: string;
    constructor(public id: number, public name: string, public price: number, public description: string) {
        this.img = 'build/img/no_image.png';
    }

}