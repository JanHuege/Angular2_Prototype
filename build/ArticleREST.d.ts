/**
 * Created by Christina on 26.04.2015.
 */
import { Article } from 'scripts/Article.d';
export declare class ArticleREST {
    articles: Array<Article>;
    findArticleById(id: number): Article;
    getArticleById(id: number): {
        id: number;
        name: string;
        price: number;
        description: string;
    };
    getArticle(): Article[];
}
