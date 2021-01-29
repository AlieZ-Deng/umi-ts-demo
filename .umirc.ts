import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout : {},
  routes: [
    {
      path: '/',
      component: '@/components/nav-layout',
      routes: [
        { path: '/', component: '@/pages/home' },
        { path: '/list', component: '@/pages/list' },
      ],
    },
  ],
  sass: {},
});
