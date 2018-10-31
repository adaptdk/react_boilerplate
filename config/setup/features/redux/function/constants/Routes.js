// Components
import AppRoot from 'components/Routes/AppRoot';
import NotFound from 'components/Routes/NotFound';

// Containers
import Frontpage from 'containers/Frontpage/index'

const routes = [{
  component: AppRoot,
  routes: [
    {
      path: '/',
      exact: true,
      component: Frontpage,
    },
    {
      path: '*',
      component: NotFound,
    },
    // {
    //   path: '/otherPath',
    //   component: otherComponent,
    // },
  ],
}];

export default routes;
