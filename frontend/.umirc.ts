import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/haha-go-brrr', component: '@/pages/Brrr' },
  ],
  fastRefresh: {},
});
