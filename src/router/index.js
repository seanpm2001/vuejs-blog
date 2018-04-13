import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import PrismicPreview from '@/components/PrismicPreview';
import Tutorial from '@/components/Tutorial';
import Page from '@/components/Page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'tutorial' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'prismic-preview',
      component: PrismicPreview
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});
