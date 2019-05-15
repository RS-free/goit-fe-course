import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

// eslint-disable-next-line react/prop-types
const Stats = ({ title, stats }) => (
  <section className="stats-section">
    {title && <h2 className="title">{styles.title}</h2>}

    <ul className="stat-list">
      {stats.length > 0 &&
        stats.map(element => (
          <li className="item">
            <span className="label">{element.label}</span>
            <span className="percentage">{element.percentage}</span>
          </li>
        ))}
    </ul>
  </section>
);

// eslint-disable-next-line react/no-typos
Stats.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.string,
};

Stats.defaultProps = {
  title: '',
  stats: '',
};

export default Stats;
