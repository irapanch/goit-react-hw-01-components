import React from 'react';
import PropTypes from 'prop-types';

export const DataStat = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(data => (
          <li key={data.id} className="item">
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
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
