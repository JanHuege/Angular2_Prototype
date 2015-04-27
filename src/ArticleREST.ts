/**
 * Created by Christina on 26.04.2015.
 */

import {Article} from 'Article';

export class ArticleREST {

    articles: Array<Article> = [
        {
            id: 1,
            name: 'Superunbequemer Stuhl',
            price: 999.89,
            description: 'Ein superunbequemer Stuhl.'

        },
        {
            id: 2,
            name: 'Haessliches Sofa',
            price: 22.81,
            description: 'Einfach Schrott.'
        },
        {
            id: 3,
            name: 'Wackeliger Tisch',
            price: 22.81,
            description: 'Designer-Object.'
        }
        ];

    findArticleById(id: number) : Article {
        var article = null;
        this.articles.forEach(function(art: Article) {
            if(art.id == id) {
                article = art;
            }
        });
        return article;
    }

    getArticleById(id: number) {
        return {
            id: id,
            name: 'Superunbequemer Stuhl',
            price: 999.89,
            description: 'Ein superunbequemer Stuhl.'

        }
    }

    getArticle() {
        return this.articles;
    }




}