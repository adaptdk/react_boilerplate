import React, { Component } from 'react';

// Routes
import { Contact } from 'constants/Routes'

class About extends Component {
  componentDidMount = () => {
    // Because we're using react-loadable, the different routes will first be fetched when navigating to them.
    // If you want to Preload another route, then use preload like below.
    Contact.preload();
  };

  render() {
    return (
      <div className="about">
        <h1>
          About
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis pariatur repellendus rerum ut
          voluptatem. Corporis cupiditate earum eligendi, eveniet, exercitationem illo laudantium nesciunt officiis
          perferendis possimus quisquam repellat veniam!</p>
      </div>
    );
  }
}

export default About;
