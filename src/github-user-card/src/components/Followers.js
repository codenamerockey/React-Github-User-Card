import React from 'react';

const Followers = ({ githubFollowers }) => {
  const following = githubFollowers.map(follower => {
    console.log(follower);
  });
  return <div>Hello from Followers Component</div>;
};

export default Followers;
