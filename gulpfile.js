function defaultTask(cb) {
    // place code for your default task here
    cb();
}
  
exports.default = defaultTask

const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/js/*.js').pipe(dest('js/main.js'));
}