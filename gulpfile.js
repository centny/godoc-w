var gulp = require('gulp');
var _ = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var del = require('del');

var sync = _.sync(gulp);

var sourceFiles = {
    html: 'src/*.html',
    moduleTemplate: 'src/application/**/*.html',
    directiveTemplate: 'src/directive/**/*.html',
    moduleScript: 'src/application/**/*.js',
    directiveScript: 'src/directive',
    serviceScript: 'src/service',
    moduleMainStyle: 'src/style/app.scss',
    commonStyle: 'src/style/**/*.scss',
    moduleStyle: 'src/application/**/*.scss',
    directiveStyle: 'src/directive/**/*.scss'
};

var destFiles = {
    dir: 'dist/',
    style: 'dist/style',
    template: 'dist/application',
    html: 'dist/*.html'
};

var buildFiles = {
    dir: 'build/'
};

var scriptsFiles = 'src/**/*.js';

var templateFiles = ['src/**/*.html', '!src/*.html'];

var styleFiles = ['src/**/*.scss', '!src/style/common/**/*'];

var allScssFiles = [
    sourceFiles.moduleMainStyle,
    sourceFiles.moduleStyle,
    sourceFiles.directiveStyle,
    sourceFiles.commonStyle
];

gulp.task('init', _.shell.task('bower install'));

gulp.task('compile:html', function() {
    return gulp.src(sourceFiles.html)
        .pipe(_.inject(gulp.src(bowerFiles()), { name: 'bower' }))
        .pipe(gulp.dest(destFiles.dir));
});

gulp.task('compile:css', function() {
    return gulp.src(styleFiles)
        .pipe(_.sass({ style: 'expanded' }))
        .pipe(gulp.dest(destFiles.dir));
});

gulp.task('compile:js', function() {
    return gulp.src(scriptsFiles)
        .pipe(_.ngAnnotate({ single_quotes: true }))
        .pipe(gulp.dest(destFiles.dir));
});

gulp.task('compile:tmpl', function() {
    return gulp.src(templateFiles)
        .pipe(_.minifyHtml({ empty: true, quotes: true }))
        .pipe(_.ngTemplate({
            moduleName: 'tmpl',
            standalone: true,
            filePath: 'template.js'
        }))
        .pipe(gulp.dest(destFiles.template));
});

gulp.task('compile', [
    'compile:html',
    'compile:js',
    'compile:css',
    'compile:tmpl'
]);

gulp.task('watch', function() {
    gulp.watch(scriptsFiles, ['compile:js']);
    gulp.watch(templateFiles, ['compile:tmpl']);
    gulp.watch(allScssFiles, ['compile:css']);
    gulp.watch(sourceFiles.html, ['compile:html']);
});

gulp.task('build:asset', sync.sync(['clean', 'init', 'compile']), function() {
    return gulp.src(destFiles.html)
        .pipe(_.useref())
        .pipe(_.if('*.css', _.minifyCss()))
        .pipe(_.if('*.js', _.uglify()))
        .pipe(_.if('*.html', _.minifyHtml({ empty: true, comments: true })))
        .pipe(gulp.dest(buildFiles.dir));
});

gulp.task('build', ['build:asset']);

gulp.task('clean', function() {
    return del([destFiles.dir, buildFiles.dir]);
});

gulp.task('serve', sync.sync(['clean', 'init', 'compile', 'watch']), function() {
    browserSync.init({
        server: {
            baseDir: 'dist/',
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        port: 1906,
        ui: {
            port: 1997
        },
        open: false
    });
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
