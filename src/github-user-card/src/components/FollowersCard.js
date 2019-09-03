import React from 'react';

function FollowersCard({ follow }) {
  return (
    <div className="flex">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={follow.avatar_url}
            style={{ width: 300, height: 300 }}
            alt="guy"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {follow.login}
            <i className="material-icons right"></i>
          </span>
          <p>
            <a href={follow.html_url} target="_blank">
              View my work
            </a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {follow.login}
            <i className="material-icons right">x</i>
          </span>
          <p>{follow.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default FollowersCard;
