/// <reference path="../../definitions/articleService/article.d.ts"/>
/// <reference path="./../../angular2/angular2.d.ts"/>

/* tslint:disable */
import {Article} from './article';
import _ = require('lodash');
/* tslint:enable */
export class ArticleResource {

    articles: Array <Article> = [

        new Article(1, "Superunbequemer Stuhl", 299.89, "Ein superunbequemer Stuhl.", 2),
        new Article(2, "Haessliches Sofa", 22.81, "Einfach Schrott.", 3),
        new Article(3, "Wackeliger Tisch", 22.81, "Designer-Object.", 5),
        new Article(4, "Nichtleuchtende Lampe", 178.99, "Dekorativ.", 1),
        new Article(5, "Kratziger Teppich", 344.55, "Kratzt.", 0),
        new Article(6, "Quietschende Tuer", 123.45, "Mit Extrafunktion.", 2),
        new Article(7, "Test", 123.90, "...", 5),
        new Article(7, "Test", 123.90, "...", 5),
        new Article(7, "Test", 123.90, "...", 5),
        new Article(7, "Test", 123.90, "...", 5),
        new Article(7, "Test", 123.90, "...", 5),
        new Article(7, "Test", 123.90, "...", 5)
    ];

    public findArticleById(id: number): Article {
        return _.find(this.articles, art => art.id === id );
/*        var article: Article = null;
        this.articles.forEach((art: Article) => {
            if (art.id === id) {
                article = art;
            }
        });
        return article;*/
    }

    public getArticleById(id: number): Article {
        return new Article(id, "Superunbequemer Stuhl.", 999.89, "Ein superunbequemer Stuhl.", 3);
    }

    public getArticles(start: number = 0, end: number = 6): Array<Article> {
        return this.articles.slice(start, end);
    }

}
