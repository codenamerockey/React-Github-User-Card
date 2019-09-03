import React from 'react';

const User = ({ githubUser }) => {
  return (
    <div className="card" style={{ width: 300 }}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={githubUser.avatar_url}
          style={{ width: 300, height: 300 }}
          alt="guy"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {githubUser.login}
          <i className="material-icons right"></i>
        </span>
        <p>
          <a href={githubUser.html_url} target="_blank">
            View my work
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {githubUser.login}
          <i className="material-icons right">x</i>
        </span>
        <p>{githubUser.bio}</p>
      </div>
    </div>
  );
};

export default User;
