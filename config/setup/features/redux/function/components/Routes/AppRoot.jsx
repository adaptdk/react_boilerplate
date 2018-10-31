import { renderRoutes } from 'react-router-config';

// This Makes sure the Props will be past down to the route components
const AppRoot = props => renderRoutes(props.route.routes);

export default AppRoot;
