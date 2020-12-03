import routes from './router';
import { IConfig } from 'umi/lib/cjs';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes,
  hash: true,
  history: {
    type: 'hash',
  },
  //publicPath: './'
  targets: {
    ie: 10,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['import', { libraryName: 'antd', libraryDirectory: 'lib' }],
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
