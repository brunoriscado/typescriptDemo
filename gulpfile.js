var gulp = require("gulp");
var ts = require("gulp-typescript");
var typescript = require('gulp-tsc');

function errorLog (error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('typescript-compile', function(){
  return gulp.src(['src/typescript/*.ts'])
    .pipe(typescript())
    .on('error', errorLog)
    .pipe(gulp.dest('src/js/'));
});

// watch the files for changes and rebuild everything
gulp.task('watch', function () {
  gulp.watch('src/typescript/*.ts', ['typescript-compile']);
});

gulp.task('default', ['typescript-compile', 'watch']);
