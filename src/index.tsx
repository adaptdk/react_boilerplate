import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';

// Utils
import * as serviceWorker from 'utils/serviceWorker';
import { connectedHistory } from 'constants/state';
import { store } from 'state';

// Container
import App from 'views/containers/App/App';

// Styles
import 'assets/styles/main.scss';

const render = (Component: FC) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <ConnectedRouter history={connectedHistory}>
          <Component />
        </ConnectedRouter>
      </AppContainer>
    </Provider>,
    document.querySelector('#root'),
  );

render(App);

// Check for browsers compatibility and dynamicly add polyfills

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
