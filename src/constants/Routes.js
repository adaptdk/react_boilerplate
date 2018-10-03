import React from 'react';
import Loadable from 'react-loadable';

// Components
import AppRoot from 'components/Routes/AppRoot';
import NotFound from 'components/Routes/NotFound';

//  Containers
export const Frontpage = Loadable({
  loader: () => import('containers/Frontpage'),
  loading: () => <div>Loading</div>,
});

export const About = Loadable({
  loader: () => import('containers/About'),
  loading: () => <div>Loading</div>,
});

export const Contact = Loadable({
  loader: () => import('containers/Contact'),
  loading: () => <div>Loading</div>,
});

const routes = [{
  component: AppRoot,
  routes: [
    {
      path: '/',
      exact: true,
      component: Frontpage,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
}];

export default routes;
