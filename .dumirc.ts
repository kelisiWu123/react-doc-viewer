import { defineConfig } from 'dumi';
import path from "path";

export default defineConfig({
  outputPath: 'react-doc-view',
  alias: {
    '@': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'DocView',
    logo:'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'
  },
  lessLoader: {
  },
  // scripts:['./js/flv.min.js'],
});
