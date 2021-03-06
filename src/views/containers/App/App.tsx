import React, { useState } from 'react';
import loadable from '@loadable/component';
import { hot } from 'react-hot-loader';

// Utilities
import { isDev } from 'utils/development';

// Components
import Header from 'views/components/Header';
import Loading from 'views/components/Loading';

// Icons
import Logo from 'assets/icons/logo.svg';

// Loadables
const Footer = loadable((): Promise<any> => import('views/components/Footer'), {
  fallback: <Loading />,
});

const App = (): JSX.Element => {
  const [value, setValue] = useState('1');

  return (
    <div className="app">
      <Header />

      <main>
        <h1>Home {value}</h1>
        <button type="button" onClick={(): void => setValue('1')}>
          1
        </button>
        <button type="button" onClick={(): void => setValue('2')}>
          2
        </button>
        <button type="button" onClick={(): void => setValue('3')}>
          3
        </button>
      </main>

      <Logo style={{ height: 200, width: 200 }} />

      <Footer />
    </div>
  );
};

export default isDev ? hot(module)(App) : App;
