var gulp        = require ( 'gulp' ),
    fileInc     = require ( 'gulp-file-include' ),
    sass        = require ( 'gulp-sass' ),
    include     = require ( 'gulp-include' ),
    livereload  = require ( 'gulp-livereload' );

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
        .pipe( gulp.dest( './' ) )
        .pipe( livereload() );
}); // html

gulp.task ( 'sass', function()
{
    gulp
        .src ( './src/sass/**/*.scss')
        .pipe ( sass() )
        .pipe( gulp.dest ( './statics/css') )
        .pipe( livereload() );
}); // sass

gulp.task ( 'js', function()
{
    gulp
        .src( './src/js/index.js' )
        .pipe( include() )
        .pipe( gulp.dest( './statics/js/' ) )
        .pipe( livereload() );
}); // js

gulp.task( 'watch', function()
{
	livereload.listen();
	gulp.watch( 'src/html/**/*.html', [ 'html' ] );
	gulp.watch( 'src/sass/**/*.scss', [ 'sass' ] );
	gulp.watch( 'src/js/**/*.js', [ 'js' ] );
});

gulp.task( 'default', [ 'watch' ] );