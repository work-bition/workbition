const gulp = require('gulp'),
      browserSync = require('browser-sync').create()

 let watch = require('./semantic/tasks/watch'),
     build = require('./semantic/tasks/build'),
     clean = require('./semantic/tasks/clean')

   // import semantic UI tasks with custom task names
   //导入semantic UI框架的gulp任务
   gulp.task('watch-ui', watch)
   //清理semantic UI框架生成的目录
   gulp.task('clean-ui', clean)
   //构建semantic UI框架（确保清理任务完成后）
   gulp.task('build-ui', ['clean-ui'], build)

   //确保清理任务完成后再进行构建
   gulp.task('build', ['clean-ui', 'build-ui'])

   // browserSync创建静态服务器并监视文件变化
   gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: ["./dist/views", "./dist/styles", "./dist/semantic-ui", "./node_modules"]
          },

          files: "./dist/views/index.html"
      })
   })

   gulp.task('serve', ["browser-sync"])
