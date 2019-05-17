import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(el => (
        <tr>
          <td>{el.transaction}</td>
          <td>{el.amount}</td>
          <td>{el.date}</td>
        </tr>
      ))}
      <tr>
        <td>Withdrawal</td>
        <td>100$</td>
        <td>4/18/2019, 14:15:23</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionHistory;
