var fs = require('fs');
var path = require('path');

var filterLs = function(dirName, ext, callBack) {
  fs.readdir(dirName, function(err, list) {
    if (err) {
      callBack(err);
    } else {
      var filteredList = list.reduce(function(filtered, file) {
        if (path.extname(file) == '.' + ext)
          filtered.push(file);
        return filtered;
      }, []);
      callBack(null, filteredList);
    }
  })
}

module.exports = filterLs;
