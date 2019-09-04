import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FollowersCard from './FollowersCard';

class Followers extends React.Component {
  state = {
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/codenamerockey/followers')
      .then(res => {
        this.setState({ followers: res.data });
      });
  }

  render() {
    return (
      <div className="flex">
        {this.state.followers.map(follower => {
          return (
            <div>
              <FollowersCard key={follower.login} follow={follower} />;
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
