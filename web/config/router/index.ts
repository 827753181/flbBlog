import { IRoute } from 'umi/lib/cjs';

const routes: IRoute[] = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: './index', title: '首页' },
    ],
  },
];
export default routes;
