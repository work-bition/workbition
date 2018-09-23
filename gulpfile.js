const gulp = require('gulp') //添加要执⾏行行的任务

gulp.task('hello', () => console.log('您好') ) //默认要执⾏行行的任务

  gulp.task('default', ['hello'])
