import ArticleService from "../services/ArticleService";

export async function getArticleIds() {
	const articles = await ArticleService.getAllArticles();

	return articles.map(article => ({
		params: {
			id: `${article.title.toLowerCase().replace(/\s/g, "-")}-${article.id}`
		}
	}));
}

export async function getArticleById(id) {
	const [actualId] = id.match(/\d$/g);
	const article = await ArticleService.getArticleById(actualId);

	return article;
}