import React from 'react';
import PropTypes from 'prop-types';

export const Transaction = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(transactions => (
        <tbody key={transactions.id}>
          <tr>
            <td>{transactions.type}</td>
            <td>{transactions.amount}</td>
            <td>{transactions.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
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
