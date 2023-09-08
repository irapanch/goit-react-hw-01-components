import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledAvatar,
  StyledContainer,
  StyledDesc,
  StyledUserName,
  StyledUserTag,
  StyledUserLocation,
  StyledStats,
  StyledStatItem,
  StyledSpan,
  StyledSpanLikes,
} from './Profile.styled';

export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledDesc>
          <StyledAvatar src={avatar} alt="User avatar" />
          <StyledUserName>{username}</StyledUserName>
          <StyledUserTag> &#64;{tag}</StyledUserTag>
          <StyledUserLocation>{location}</StyledUserLocation>
        </StyledDesc>

        <StyledStats>
          <StyledStatItem>
            <StyledSpan>{Object.keys(stats)[0]}</StyledSpan>
            <StyledSpanLikes>{stats.followers}</StyledSpanLikes>
          </StyledStatItem>
          <StyledStatItem>
            <StyledSpan>{Object.keys(stats)[1]}</StyledSpan>
            <StyledSpanLikes>{stats.views}</StyledSpanLikes>
          </StyledStatItem>
          <StyledStatItem>
            <StyledSpan>{Object.keys(stats)[2]}</StyledSpan>
            <StyledSpanLikes>{stats.likes}</StyledSpanLikes>
          </StyledStatItem>
        </StyledStats>
      </StyledWrapper>
    </StyledContainer>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
