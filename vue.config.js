// var webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const myCompressionPlugin = new CompressionPlugin({
  filename: '[file].br[query]',
  algorithm: 'brotliCompress',
  include: /\.(png|jpg|svg|pdf|js|css|woff2|ico|html)$/i,
  compressionOptions: {level:11},
  minRatio: 0.8,
})

module.exports = {
  chainWebpack(config) {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    
    // and this line 
    config.plugin('CompressionPlugin').use(myCompressionPlugin);
  },
  devServer: {
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
  },
  pluginOptions: {
    compression:{
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },
  // configureWebpack: {
  // //   plugins: [
  // //     new BundleAnalyzerPlugin(),
  // //     new webpack.DefinePlugin({
  // //       'process.env.NODE_ENV': JSON.stringify('production')
  // //     })
  // //   ],    
  //   optimization: {
  //     nodeEnv: 'production',
  //     minimize: true,
  //     runtimeChunk: 'single',
  //     splitChunks: {
  //       chunks: 'all',
  //       maxInitialRequests: Infinity,
  //       minSize: 0,
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name(module) {
  //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  //             return `npm.${packageName.replace('@', '')}`;
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
    
};