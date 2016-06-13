var gulp = require('gulp');
var nodemon = require('gulp-nodemon')

gulp.task('default',function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: { 'PORT': 25000},
        watch : ['*.js']
     }; 
    return nodemon(options).on('restart', function(env){
        console.log('Restarting... ');
    });

});