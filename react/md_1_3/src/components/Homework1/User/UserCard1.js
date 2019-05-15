import React from 'react';
import styles from './UserCard1.module.css';

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

export default UserCard1;
