var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    iconfont    =   require( 'gulp-iconfont' ),
    iconfontCss =   require( 'gulp-iconfont-css' );
    // webpack = require('webpack'),
    // webpackStream  = require('webpack-stream');
    // webpackConfig = require('./webpack.config.js');

//styles (compressed, autoprefixer)
gulp.task('style', gulp.series(function () {
    return gulp.src('src/styles/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'))
}));


gulp.task('scripts', () => 
    gulp.src(['./src/js/swiper-bundle.js', './src/js/main.js'])
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename('index.js'))
        .pipe(gulp.dest('./'))
);

// gulp.task('webpack', () =>
// 	gulp.src('src/js/main.js')
// 		.pipe(babel({
// 			presets: ['@babel/preset-env']
//         }))
//         .pipe(webpackStream(webpackConfig), webpack)
//         .pipe(rename('index.js'))
//         .pipe(webpackStream(webpackConfig, webpack))
// 		.pipe(gulp.dest('./'))
// );

gulp.task('watch', function () {
    gulp.watch('./src/js/main.js', gulp.series('scripts'))
    gulp.watch('src/styles/**/*.scss', gulp.series('style'))
    // return gulp.watch('src/styles/**/*.scss', gulp.series('default'));
});

//icon fonts
var fontName = 'icons';

//add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
gulp.task( 'iconfont', async () => {
    gulp.src( 'src/assets/icons/*.svg' )
        .pipe( iconfontCss( {
            // где будет наш scss файл
            targetPath   : '../../styles/common/_icons.scss',
            // пути подлючения шрифтов в _icons.scss
            fontPath     : 'src/assets/fonts/',
            fontName    : fontName

        } ) )
        .pipe( iconfont( {
            fontName    : fontName,
            formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
            normalize   : true,
            fontHeight  : 1001
        } ) )
        .pipe( gulp.dest( 'src/assets/fonts' ) )
});

gulp.task('default', gulp.series('style', 'scripts', 'iconfont', 'watch'));
