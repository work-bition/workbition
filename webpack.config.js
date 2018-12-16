const HtmlWebpackPlugin =   require('html-webpack-plugin')

const DllReferencePlugin =  require('webpack/lib/DllReferencePlugin')

const ProvidePlugin =       require('webpack/lib/ProvidePlugin')



const path = require('path')

module.exports = {

  entry: {

    main: './develop/scripts/main.js'

  },

  output: {

    filename: '[name].bundle.js',

    path: path.resolve(__dirname, 'dist/scripts')

  },

  module: {

    rules: [

      {
        test: /\.js$/,

        exclude: path.resolve(__dirname, 'node_modules'),

        use: {

          loader: 'babel-loader'

        }

      }

    ]

  },

  optimization: {

    splitChunks: {

      chunks: 'all'

    }

  },

  plugins: [

    //指出需要将打包的js文件嵌入的文件
    // new HtmlWebpackPlugin({
    //
    //   template:'./develop/scripts/index.blade.php',
    //
    //   filename:'index.blade.php'
    //
    // }),

    // 告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({

      // 描述 vendor 动态链接库的文件内容
      manifest: require('./dist/scripts/vendor.manifest.json')

    }),

    //在任意引用的位置，自动加载相关模块，无需额外import
    new ProvidePlugin({

      $: 'jquery',

      jQuery: 'jquery'

    })

  ],

  mode: 'development',

  devtool: 'source-map'

}
