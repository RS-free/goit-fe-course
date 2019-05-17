import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    inputData: 0,
    balance: 0,
    income: 0,
    outcome: 0,
    history: [],
    transaction: '',
  };

  onChange = e => {
    console.log('onChange');

    this.setState({ inputData: +e.target.value });
  };

  onClick = e => {
    console.log('onClick');
    if (e.target.textContent === 'Deposit') {
      this.setState(
        {
          balance: this.state.inputData + this.state.balance,
          income: this.state.income + this.state.inputData,
          transaction: 'Deposit',
        },
        this.addTransaction,
      );
    } else if (e.target.textContent === 'Withdraw') {
      this.setState(
        prevState => ({
          balance: prevState.balance - prevState.inputData,
          outcome: prevState.outcome + prevState.inputData,
          transaction: 'Withdrawal',
        }),
        this.addTransaction,
      );
    }
  };

  addTransaction = () => {
    const newArr = [...this.state.history];
    newArr.push({
      transaction: this.state.transaction,
      amount: this.state.inputData,
      date: new Date(new Date().toISOString()).toLocaleString(),
    });
    console.log(newArr);

    this.setState({
      history: newArr,
    });
  };

  render() {
    return (
      <div className={styles.dashboard}>
        <Controls onChange={this.onChange} onClick={this.onClick} />
        <Balance
          income={this.state.income}
          outcome={this.state.outcome}
          balance={this.state.balance}
        />
        <TransactionHistory
          addTransaction={this.addTransaction}
          transaction={this.state.transaction}
          history={this.state.history}
        />
      </div>
    );
  }
}
export default Dashboard;
