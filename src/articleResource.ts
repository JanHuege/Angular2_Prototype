/**
 * Created by Christina on 26.04.2015.
 */

import {Article} from './article';

export class ArticleResource {
    articles: Array < Article >= [

        new Article(1, 'Superunbequemer Stuhl', 999.89, 'Ein superunbequemer Stuhl.'),
        new Article(2, 'Haessliches Sofa', 22.81, 'Einfach Schrott.'),
        new Article(3, 'Wackeliger Tisch', 22.81, 'Designer-Object.'),
        new Article(4, 'Nichtleuchtende Lampe', 178.99, 'Dekorativ.'),
        new Article(5, 'Kratziger Teppich', 344.55, 'Kratzt.'),
        new Article(6, 'Quietschende Tuer', 123.45, 'Mit Extrafunktion.')

    ];

    findArticleById(id: number): Article {
        var article = null;
        this.articles.forEach(function(art: Article) {
            if (art.id == id) {
                article = art;
            }
        });
        return article;
    }

    getArticleById(id: number) {
        return new Article(id, 'Superunbequemer Stuhl.', 999.89, 'Ein superunbequemer Stuhl.');
    }

    getArticle() {
        return this.articles;
    }
}