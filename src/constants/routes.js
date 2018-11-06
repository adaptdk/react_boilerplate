import { renderRoutes } from 'react-router-config';

// Containers
import Frontpage from 'views/containers/Frontpage';
import NotFound from 'views/containers/NotFound';

const routes = [{
  component: props => renderRoutes(props.route.routes),
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
