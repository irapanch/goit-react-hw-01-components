import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledTitle,
  StyledList,
  StyledLi,
  StyledLabel,
  StyledPercentage,
} from './Statistic.Styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
export const DataStat = ({ title, stats }) => {
  return (
    <StyledWrapper>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {stats.map(data => (
          <StyledLi key={data.id} $bg={getRandomHexColor()}>
            <StyledLabel>{data.label}</StyledLabel>
            <StyledPercentage>{data.percentage}%</StyledPercentage>
          </StyledLi>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

DataStat.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
