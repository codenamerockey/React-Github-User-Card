import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FollowersCard from './FollowersCard';

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/codenamerockey/followers')
      .then(res => {
        setFollowers(res.data);
      });
  }, []);

  return (
    <div className="flex">
      {followers.map(follower => {
        return (
          <div>
            <FollowersCard key={follower.login} follow={follower} />;
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
