import React, { Component } from 'react';

// Containers
import Frontpage from 'views/containers/Frontpage/Frontpage';

// Components
import Header from 'views/components/Header';
import Footer from 'views/components/Footer';

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

export default App;
