// webpack.mix.js
let mix = require('laravel-mix');

mix.sass('assets/css/style.scss', 'style.css');

mix.webpackConfig({
  watchOptions: {
    ignored: /node_modules/
  }
});