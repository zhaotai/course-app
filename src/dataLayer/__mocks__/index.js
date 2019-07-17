const generatePromise = (data) => {
  return () => {
    return new Promise(resolve => {
      resolve(data);
    });
  }
}
export default {
  getArticles: generatePromise([]),
  createArticle: generatePromise(),
  getFlights: generatePromise(["aaa"])
}