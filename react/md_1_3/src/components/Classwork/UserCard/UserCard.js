import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const UserCard = ({ name, email, country }) => (
  <li>
    <p>{name}</p>
    <span>{email}</span>
    <p>{country}</p>
  </li>
);

// eslint-disable-next-line react/no-typos
UserCard.PropTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  country: PropTypes.string,
};

UserCard.defaultProps = {
  name: '',
  email: '',
  country: '',
};

export default UserCard;
