import React, { Component } from 'react';

// Media
import ChristianImg from 'assets/media/christian.jpg';

class Frontpage extends Component {
  render() {
    return (
      <div className="frontpage">
        <h1>
          Home
        </h1>
        <img src={ChristianImg} alt="The sheep Christian" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis pariatur repellendus rerum ut
          voluptatem. Corporis cupiditate earum eligendi, eveniet, exercitationem illo laudantium nesciunt officiis
          perferendis possimus quisquam repellat veniam!</p>
      </div>
    );
  }
}

export default Frontpage;
