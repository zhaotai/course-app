const host = "http://localhost:8000";
const getArticles = () => {
  return fetch(`${host}/`).then(raw => raw.json());
};

const createArticle = (article) => {
  return fetch(`${host}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article)
  })
  .then(rawRes => rawRes.json());
};

export default {
  getArticles,
  createArticle
}