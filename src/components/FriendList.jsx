import React from 'react';
// avatar, name, isOnline
export const Friends = ({ arrFriends }) => {
  return (
    <ul className="friend-list">
      {arrFriends.map(friends => (
        <li class="item">
          <span class="status">{friends.isOnline}</span>
          <img
            class="avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friends.name}</p>
        </li>
      ))}
    </ul>
  );
};
