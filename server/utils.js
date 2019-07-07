const fs = require('fs');

function writeJSON(path, content) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(content);
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
        resolve(content);
      }
    })
  });
}

function readJSON(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
        let jsonData = data.toString();
        jsonData = JSON.parse(jsonData);
        resolve(jsonData);
      }
    });
  });
}

module.exports = {
  writeJSON,
  readJSON
}