var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');//gulpを止めない
var mincss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sassGlob = require('gulp-sass-glob');//importにおけるglobを有効にする
var imagemin = require('gulp-imagemin');//画像圧縮
var pngquant = require('imagemin-pngquant');//pngの圧縮率を上げる
var changed = require('gulp-changed');//画像圧縮されたファイルを返す


//sassをcssにコンパイル
gulp.task('sass', function(){
    return gulp.src('./app.scss') //元ファイル
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(plumber()) // 構文エラーあってもgulp止めない
    .pipe(sass({outputStyle: 'expanded'})) //オプション付けて見やすくする
    .pipe(rename('style.css'))//ファイル名と拡張子の変更
    .pipe(gulp.dest('./css/src')); //出力先（cssフォルダに自動で作成される）
});

//cssを圧縮
gulp.task('mincss', function() {
    return gulp.src('./css/src/*.css')//元ファイル
    .pipe(plumber())//構文エラーあってもgulpを止めない.
    .pipe(mincss())//css圧縮
    .pipe(rename('app.min.css'))//ファイル名と拡張子の変更
    .pipe(gulp.dest('./css'));//出力先（cssフォルダに自動で作成される）
});

//画像を圧縮
var paths = {
    srcDir : './img',//元ディレクトリ
    dstDir : './images'//出力ディレクトリ
}
gulp.task('imagemin', function() {
    var srcGlob = paths.srcDir + '/*.+(jpg|jpeg|png|gif)';//元ファイル
    var dstGlob = paths.dstDir;//出力ファイル
    return gulp.src(srcGlob)//元ファイル
        .pipe(plumber()) // 構文エラーあってもgulp止めない
        .pipe(changed(dstGlob))//srcGlobとdstGlobの差分を、changedで変更されていないファイルだけ返す
        .pipe(imagemin([//画像圧縮のオプション
            pngquant({//png
                quality: [.60, .70],
                speed: 1
            })
        ])
    )
    .pipe(gulp.dest(dstGlob));//出力
});


//watch 
gulp.task('watch', function(){
    gulp.watch('./scss/**', gulp.series('sass'));//scss以下すべてのファイルをwatch
    gulp.watch('./css/src/*.css', gulp.series('mincss'));//css圧縮
    gulp.watch(paths.srcDir + '/*', gulp.series('imagemin'));//画像圧縮
});
