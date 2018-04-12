var gulp        = require ( 'gulp' ),
    fileInc     = require ( 'gulp-file-include' );

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