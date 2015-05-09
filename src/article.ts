/**
 * Created by Christina on 27.04.2015.
 */

export class Article {

    id: number;
    name: string;
    price: number;
    description: string;
    img: string;

    constructor(id: number, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = "build/img/no_image.png";
    }
}
