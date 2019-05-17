import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  constructor(value, onChange) {
    super(value, onChange);
    this.state = {};
  }

  // onFilter = () => {

  // }

  render() {
    const {} = this.state;
    return (
      <>
        <input type="text" className={styles.input} />
      </>
    );
  }
}

export default SearchBar;
