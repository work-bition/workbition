const gulp = require('gulp'),
      browserSync = require('browser-sync').create()

 let watch = require('./semantic/tasks/watch'),
     build = require('./semantic/tasks/build')

   // import semantic UI tasks with custom task names
   //导入semantic UI框架的gulp任务
   gulp.task('watch-ui', watch)
   //构建semantic UI框架
   gulp.task('build-ui', build)

   // browserSync创建静态服务器并监视文件变化
   gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: ["./dist/views", "./dist/semantic-ui", "./node_modules"]
          },

          files: "./dist/views/index.html"
      });
   });
