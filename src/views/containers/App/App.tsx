import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from 'views/components/Header';
import Loading from 'views/components/Loading';

// Icons
import Logo from 'assets/icons/logo.svg';

// Loadables
const NotFound = loadable((): Promise<any> => import('views/containers/NotFound/NotFound'));
const Footer = loadable((): Promise<any> => import('views/components/Footer'), {
  fallback: <Loading />,
});
const Frontpage = loadable((): Promise<any> => import('views/containers/Frontpage/Frontpage'), {
  fallback: <Loading />,
});

const App = (): JSX.Element => (
  <div className="app">
    <Header />

    <main>
      <Switch>
        <Route path="/" component={(props): JSX.Element => <Frontpage {...props} />} exact />
        <Route component={(props): JSX.Element => <NotFound {...props} />} />
      </Switch>
    </main>

    <Logo style={{ height: 200, width: 200 }} />

    <Footer />
  </div>
);

export default App;
