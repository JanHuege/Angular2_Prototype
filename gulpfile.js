// Include gulp
var gulp = require('gulp'),
// var ts = require('gulp-typescript');
// var merge = require('merge2');
    shell = require('gulp-shell'),
    connect = require('gulp-connect'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    gutil = require('gulp-util'),
    newer = require('gulp-newer'),
    tslint = require('gulp-tslint'),
    cache = require('gulp-cached'),
    format = require('gulp-clang-format'),

    dir = {
        src: 'src',
        build: 'build',
        npm : 'node_modules'
    },

    subdir = {
        js: dir.build + '/scripts',
        html: dir.build + '/html_templates',
        minhtml: dir.build + '/min_html',
        css: dir.build + '/style/css',
        fonts: dir.build + '/style/fonts',
        stylejs: dir.build + '/style/js',
        img: dir.build + '/img',
        extern: dir.build + '/extern',
        app: dir.build + '/app'
    },

    data = {
        ts: [
            dir.src + '/article.ts',
            dir.src + '/articleController.ts',
            dir.src + '/articleResource.ts',
            dir.src + '/customer.ts'
            //TODO add all files
        ],
        js: [
            dir.src + ''
        ],
        jsOther: [
            dir.src + '/style/js/*.min.js',
            dir.src + '/style/js/*.js'
        ],
        cssOther: [
            dir.src + '/style/css/*.css.map'
        ],
        html: [
            dir.src + '/views/Articles/*.html',
            dir.src + '/views/Customers/*.html',
            dir.src + '/views/Shoppingcart/*.html',
            dir.src + '/views/employees/*.html',
            dir.src + '/views/app/*.html'
        ],
        img: dir.src + '/style/img/*',
        fonts: dir.src + '/style/fonts/*',
        css: dir.src + '/style/css/*.css',
        mincss: dir.src + '/style/css/*.min.css',
        extern: dir.src + '/extern/*',
        indexHtml: dir.src + '/views/index/*.html'
    };

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

// Call once to compile all .ts files before running gulp default for the first time
gulp.task('shell',shell.task([
    'node node_modules/tsc/tsc.js'
]));

// Watching all .ts and .html files
gulp.task('watch', function(){
    gulp.watch('src/*', ['shell']);
    gulp.watch(data.html, ['minify-htmlviews']);
    gulp.watch(data.indexHtml, ['minify-index-html']);
    // gulp.watch('src/*', ['scripts']);
});

gulp.task('connect', function() {
    connect.server({
        // root: 'build',
        livereload: true
    });
});

// Use to setup all needed data
gulp.task('ready', ['minify','copyFonts','copyStyleJS','copyCSS-map','copyExtern','copyMINCSS']);

    gulp.task('minify', ['minify-htmlviews','minify-index-html','imagemin']);

        gulp.task('imagemin', function(){
            return gulp.src(data.img)
                .pipe(newer(subdir.img))
                // --prod
                .pipe(gutil.env.prod ? imagemin() : gutil.noop())
                .pipe(gulp.dest(subdir.img));
        });

        gulp.task('minify-htmlviews', function(){
            var options = {
                conditionals: true,
                spare: true
            };

            return gulp.src(data.html)
                .pipe(minifyHTML(options))
                .pipe(gulp.dest(subdir.html));
        });

        gulp.task('minify-index-html', function(){
            var options = {
                conditionals: true,
                spare: true
            };

        return gulp.src(data.indexHtml)
            .pipe(minifyHTML(options))
            .pipe(gulp.dest(dir.build));
        });

    gulp.task('copyFonts', function() {
        return gulp.src(data.fonts)
            .pipe(newer(subdir.fonts))
            .pipe(gulp.dest(subdir.fonts));
    });

    gulp.task('copyStyleJS', function(){
        return gulp.src(data.jsOther)
            .pipe(newer(subdir.stylejs))
            .pipe(gulp.dest(subdir.stylejs));
    });

    gulp.task('copyMINCSS', function(){
        return gulp.src(data.mincss)
            .pipe(newer(subdir.css))
            .pipe(gulp.dest(subdir.css));
    });

    gulp.task('copyCSS-map', function(){
        return gulp.src(data.cssOther)
            .pipe(newer(subdir.css))
            .pipe(gulp.dest(subdir.css));
    });

    gulp.task('copyExtern', function(){
        return gulp.src(data.extern)
            .pipe(newer(subdir.extern))
            .pipe(gulp.dest(subdir.extern));
    });

gulp.task('tslint', function(){
    // --nocheck
    if (gutil.env.nocheck) {
        return;
    }

    gulp.src(data.ts)
        .pipe(cache('tslint'))
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('clang-format', function() {
    // --nocheck
    if (gutil.env.nocheck) {
        return;
    }

    // http://clang.llvm.org/docs/ClangFormatStyleOptions.html
    return gulp.src(data.ts)
        // clang ist ein C/C++/Objective-C Compiler des Projekts LLVM http://www.llvm.org
        // Formatierungseinstellungen in .clang-format:
        // Google (default) http://google-styleguide.googlecode.com/svn/trunk/cppguide.html
        // LLVM http://llvm.org/docs/CodingStandards.html
        // Chromium http://www.chromium.org/developers/coding-style
        // Mozilla https://developer.mozilla.org/en-US/docs/Developer_Guide/Coding_Style
        // WebKit http://www.webkit.org/coding/coding-style.html
        .pipe(format.checkFormat('file'))
        .on('warning', function(e) {
            process.stdout.write(e.message);
            process.exit(1);
        });
});

// Start Server with livereload and watchtask
gulp.task('default',['connect', 'watch']);