/**
 * Created by Christina on 26.04.2015.
 */


export class ArticleREST {

    articles = [
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
        }
        ];

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