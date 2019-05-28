import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from '../StoreItem/StoreItem';
import classes from './StoreList.module.css';

const StoreList = ({ data }) => (
  <ul className={classes.todoList}>
    {data.map(el => (
      <StoreItem data={el} />
    ))}
  </ul>
);

StoreList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default StoreList;
