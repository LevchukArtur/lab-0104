var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})
