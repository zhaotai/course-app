import dataLayer from "../dataLayer";

export function submitPost(values, cb) {
  dataLayer.createArticle(values).then(res => {
    cb();
  });
}