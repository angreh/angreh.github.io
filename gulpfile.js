var gulp        = require ( 'gulp' ),
    fileInc     = require ( 'gulp-file-include' ),
    sass        = require ( 'gulp-sass' );

gulp.task ( 'html', function()
{
    gulp
        .src( './src/html/index.html' )
        .pipe( 
            fileInc({
                prefix: '@@',
                basepath: '@file'
            }) // fileInc
        ) // .pipe
        .pipe( gulp.dest( './' ) );
}); // html

gulp.task ( 'sass', function()
{
    gulp
        .src ( './src/sass/**/*.scss')
        .pipe ( sass() )
        .pipe( gulp.dest ( './statics/css') );
});