import React from 'react';
import ReactDOM from 'react-dom';

// Utils
import * as serviceWorker from 'utilities/serviceWorker';

// Container
import App from 'views/containers/App/App';

// Styles
import 'assets/styles/main.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
