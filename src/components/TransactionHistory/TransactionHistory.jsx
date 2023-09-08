import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledRow,
  StyledTd,
  StyledRows,
} from './TransactionHistory.Styled';

export const Transaction = ({ items }) => {
  return (
    <StyledTable>
      <thead>
        <StyledRow>
          <StyledTd>Type</StyledTd>
          <StyledTd>Amount</StyledTd>
          <StyledTd>Currency</StyledTd>
        </StyledRow>
      </thead>
      <tbody>
        {items.map(({ currency, amount, type, id }, idx) => (
          <StyledRows key={id} $idx={idx}>
            <StyledTd>{type}</StyledTd>
            <StyledTd>{amount}</StyledTd>
            <StyledTd>{currency}</StyledTd>
          </StyledRows>
        ))}
      </tbody>
    </StyledTable>
  );
};
Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
