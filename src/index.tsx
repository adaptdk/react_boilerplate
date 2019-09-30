import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Utils
import { store } from 'state';
import * as serviceWorker from 'utils/serviceWorker';

// Container
import App from 'views/containers/App/App';

// Styles
import 'assets/styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
