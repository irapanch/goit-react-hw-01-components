import React from 'react';
import PropTypes from 'prop-types';

export const Friends = ({ arrFriends }) => {
  return (
    <ul className="friend-list">
      {arrFriends.map(friends => (
        <li key={friends.id} className="item">
          <span className="status">{friends.isOnline}</span>
          <img
            className="avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  arrFriends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};
