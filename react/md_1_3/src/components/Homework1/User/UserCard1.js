import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard1.module.css';

// eslint-disable-next-line react/prop-types
const UserCard1 = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
);

// eslint-disable-next-line react/no-typos
UserCard1.PropTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

UserCard1.defaultProps = {
  name: '',
  tag: '',
  location: '',
};

export default UserCard1;
