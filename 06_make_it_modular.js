var filterModule = require('./06_filter_ls_module')

var dirName = process.argv[2]
var ext = process.argv[3]

filterModule(dirName, ext, function(err, data) {
  if (err) {
    throw err;
  } else {
    data.forEach(function(file) {
      console.log(file);
    });
  }

});
