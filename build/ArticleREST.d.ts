/**
 * Created by Christina on 26.04.2015.
 */
export declare class ArticleREST {
    articles: {
        id: number;
        name: string;
        price: number;
        description: string;
    }[];
    getArticleById(id: number): {
        id: number;
        name: string;
        price: number;
        description: string;
    };
    getArticle(): {
        id: number;
        name: string;
        price: number;
        description: string;
    }[];
}
