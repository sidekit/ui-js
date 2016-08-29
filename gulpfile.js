'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

gulp.task('lint', function () {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build', function () {
    return gulp.src([
        'vendor/bower/mustache.js/mustache.js',
        'src/sidekit-base.js',
        'src/sidekit-factory.js',
        'src/sidekit-widget.js'
    ])
    .pipe(concat('sidekit-ui-core.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('sidekit-ui-core.min.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist'));
});


