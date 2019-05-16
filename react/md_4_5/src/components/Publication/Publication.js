import React from 'react';

const Publications = ({ data }) => (
  <article class="publication">
    <h2>{data.title}</h2>
    <p>{data.text}</p>
  </article>
);

export default Publications;
