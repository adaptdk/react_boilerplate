import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Utils
import * as serviceWorker from 'utilities/serviceWorker';
import { store, persistor } from 'state/store';

// Container
import App from 'views/containers/App';

// Styles
import 'assets/styles/critical.crit.scss';
import 'assets/styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
