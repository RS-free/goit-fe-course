import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default
import Controls from '../Controls/Controls';
import classes from './StoreItem.module.css';

const StoreItem = ({ data }) => (
  <li className={classes.todo} key={data.id}>
    <h2>{data.title}</h2>
    <span>{data.description}</span>
    <p> {data.cost}</p>
    <div className={classes.controls}>
      <Controls data={data} />
    </div>
  </li>
);

StoreItem.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default StoreItem;
