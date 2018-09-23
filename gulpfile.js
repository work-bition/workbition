const gulp = require('gulp') //添加要执⾏行行的任务

 let
   watch = require('./semantic/tasks/watch'),
   build = require('./semantic/tasks/build')

   // import semantic UI tasks with custom task names
   //导入semantic UI框架的gulp任务
   gulp.task('watch-ui', watch);
   //构建semantic UI框架
   gulp.task('build-ui', build);
