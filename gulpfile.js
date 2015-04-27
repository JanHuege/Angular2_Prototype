// Include gulp
var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var shell = require('gulp-shell');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect')

//TODO
    // traceur?
    // bower? oder npm?
    // andere ts compiler und zeugs

/*
gulp.task('scripts', function(){
   var tsResult = gulp.src('src/*.ts')
       .pipe(ts({
           module: 'amd',
           declarationFiles: true,
           noExternalResolve: true,
           typescript: require('typescript')
       }));

    return merge([
        tsResult.dts.pipe(gulp.dest('build/definitions')),
        tsResult.js.pipe(gulp.dest('build/js'))
    ])
});
*/

gulp.task('shell',shell.task([
    'node node_modules/tsc/tsc.js'
]));

/*
gulp.task('watch', function(){
   gulp.watch('src/*', ['scripts']);
});
*/

gulp.task('watch', function(){
    gulp.watch('src/*', ['shell']);
});

gulp.task('webserver', function() {
    gulp.src('build')   //was macht src?
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: false

            },
            open: true
        }));
});

gulp.task('connect', function() {
    connect.server({
        //root: 'build',
        livereload: true
    });
});

// default task called by * gulp
//gulp.task('default',['scripts', 'watch']);
gulp.task('default',['shell', 'connect', 'watch']);