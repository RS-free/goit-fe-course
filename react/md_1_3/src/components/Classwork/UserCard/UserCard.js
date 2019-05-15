import React from 'react';

const UserCard = ({ name, email, country }) => (
  <li>
    <p>{name}</p>
    <span>{email}</span>
    <p>{country}</p>
  </li>
);

export default UserCard;
