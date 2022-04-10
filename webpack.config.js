const path = require('path')

module.exports = {
 entry: ['./src/index.js'],
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
     {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
     },
     {
       test: /\.(pdf|jpg|png|gif|svg|ico)$/,
       use: [
         {
           loader: 'url-loader'
         },
       ]
     },
     {  
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       loader: "file-loader"
     }
   ]
 },
 resolve: {
   extensions: ['*', '.js', '.jsx']
 },
 output: {
   path: __dirname + '/dist',
   publicPath: '/',
 },
optimization: {splitChunks: {
  chunks: 'all',
  minSize: 20000,
  minRemainingSize: 0,
  minChunks: 1,
  maxAsyncRequests: 30,
  maxInitialRequests: 30,
  enforceSizeThreshold: 50000,
  cacheGroups: {
    defaultVendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      reuseExistingChunk: true,
      idHint: 'vendors',
      name: "vendors"
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true,
    },
  },
} },
 devServer: {
   static: {
     directory: path.join(__dirname, 'dist')
   }
 }
};