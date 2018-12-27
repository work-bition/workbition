  //导入gulp, browserSync, sass和Babel模块
  const gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        sass        = require('gulp-sass'),
        babel       = require('gulp-babel'),
        run         = require('gulp-run-command').default,
        reload      = browserSync.reload

  //导入semantic UI框架的gulp任务
  const watch = require('./semantic/tasks/watch'),
        build = require('./semantic/tasks/build'),
        clean = require('./semantic/tasks/clean')

  //监视semantic-UI框架的源文件
  gulp.task('watch-ui', watch)
  //清理semantic UI框架生成的目录
  gulp.task('clean-ui', clean)
  //构建semantic UI框架（确保清理任务完成后）
  gulp.task('build-ui', ['clean-ui'], build)

  // scss编译后的css将注入到浏览器里实现更新
  gulp.task('sass', function() {

    return gulp.src("./develop/styles/**/*.scss")

      .pipe(sass())

      .pipe(gulp.dest("./dist/styles"))

      .pipe(reload({stream: true}))

  })

  //使用Babel处理完JS文件后返回流
  gulp.task('js', () =>

    gulp.src("./develop/scripts/**/*.js")

  		.pipe(babel())

  		.pipe(gulp.dest("./dist/scripts"))

      .pipe(reload({stream: true}))

   )

  // browserSync创建静态服务器并监视文件变化
  gulp.task('browser-sync', function() {

      browserSync.init({

          server: {

              baseDir: [

                "./dist/views",

                "./dist/styles",

                "./dist/scripts",

                "./dist/semantic-ui",

                "./node_modules",

                "./dist/images"

              ]
          },

          //当文件改动时，刷新浏览器
          files: ["./dist/views/index.html", "./dist/semantic-ui/**/*", "./dist/scripts/*.bundle.js"],

          browser: ["google chrome", "firefox", "safari"]

      })

      //监听sass文件和js文件变动
      // 添加 browserSync.reload 到任务队列里
      // 所有的浏览器重载后任务完成
      gulp.watch("./develop/styles/**/*.scss", ['sass'])
      gulp.watch("./develop/scripts/**/*.js", ['js-business'])

   })

  //使用webpack生成第三方js库（不易变动）
  gulp.task('js-vendor', run('webpack --config webpack.dll.config.js'))

  //使用webpack编译业务代码
  gulp.task('js-business', run('webpack --config webpack.config.js'))

  //监视入口指令
  gulp.task('serve', ["browser-sync", "watch-ui"])
