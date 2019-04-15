import React, { Component } from "react";
import Loadable from "react-loadable";
import { hot } from "react-hot-loader";

// Utilities
import { isDev } from "utilities/development";

// Containers
import Frontpage from "views/containers/Frontpage/Frontpage";

// Components
import Header from "views/components/Header";
import Loading from "views/components/Loading";

// Loadables
const Footer = Loadable({
  loader: () => import("views/components/Footer"),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <Frontpage />
        </main>

        <Footer />
      </div>
    );
  }
}

// export default App;
export default (isDev() ? hot(module)(App) : App);
