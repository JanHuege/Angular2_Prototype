/**
 * Created by Christina on 26.04.2015.
 */
define(["require", "exports"], function (require, exports) {
    var ArticleREST = (function () {
        function ArticleREST() {
            this.articles = [
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
        }
        ArticleREST.prototype.getArticleById = function (id) {
            return {
                id: id,
                name: 'Superunbequemer Stuhl',
                price: 999.89,
                description: 'Ein superunbequemer Stuhl.'
            };
        };
        ArticleREST.prototype.getArticle = function () {
            return this.articles;
        };
        return ArticleREST;
    })();
    exports.ArticleREST = ArticleREST;
});
