const fs = require("fs");

exports.list = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("/dev/", (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      result = result.filter((value) => {
        return value.indexOf("cu.") > -1;
      });
      resolve(result);
    });
  });
};
