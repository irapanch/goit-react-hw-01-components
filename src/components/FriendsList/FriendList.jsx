import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledStatItem,
  StyledStatus,
  StyledAvatar,
} from './FriendsList.Styled';

export const Friends = ({ arrFriends }) => {
  return (
    <StyledWrapper>
      {arrFriends.map(friends => (
        <StyledStatItem key={friends.id}>
          <StyledStatus $isOnline={friends.isOnline}>
            {friends.isOnline}
          </StyledStatus>
          <StyledAvatar src={friends.avatar} alt="User avatar" width="48" />
          <p className="name">{friends.name}</p>
        </StyledStatItem>
      ))}
    </StyledWrapper>
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
