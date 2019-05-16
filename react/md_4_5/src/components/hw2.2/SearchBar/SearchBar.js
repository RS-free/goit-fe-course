import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Comment {
  constructor(value, onChange) {
    super(value, onChange);
    this.state = {};
  }
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
