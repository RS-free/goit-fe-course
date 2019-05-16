import React, { Component } from 'react';

const Counter = ({ page, max }) => (
  <p class="counter">
    {page + 1}/{max}
  </p>
);

export default Counter;
