/**
 * Created by ��� on 2017/10/13.
 */
var fs = require('fs');
var url = require('url');
var path = require('path');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
gulp.task('server', function(){
   gulp.src('./Data')
       .pipe(webserver({
           port: 8080,
           host: 'localhost',
           livereload:{
               enable: true
           },
           directoryListing:{
               path: './',
               enable: true
           },
           open: true,
           middleware: function(req, res, next){
               var urlObj = url.parse(req.url);
               var newUrl = path.join(__dirname, 'Data/', urlObj.query + '.json');
               fs.exists(newUrl, function(exist){
                   if(!exist) {
                       res.writeHead(404, {
                           'Content-Type' : 'text/json;charset=utf-8'
                       });
                       res.end('no find!');
                   } else {
                       fs.readFile(newUrl, function(err, data){
                           if (err) {
                               throw err;
                           }
                           res.writeHead(200, {
                               'Content-Type': 'text/json;charset=utf-8',
                               'Access-Control-Allow-Origin': 'http://localhost:63342'
                           });
                           res.end(data.toString())
                       })
                   }
               });
           }
       }))
});
gulp.task('controllerJs', function(){
    gulp.src('./App/Controller/*js')
        .pipe(concat('controller.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./App'))
});
gulp.task('directiveJs', function(){
    gulp.src('./App/Directive/*js')
        .pipe(concat('directive.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./App'))
});
gulp.task('serviceJs', function(){
    gulp.src('./App/Service/*js')
        .pipe(concat('service.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./App'))
});