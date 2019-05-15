import React, { Component } from 'react';
// classwork
import Header from './Classwork/Header/Header';
import Counter from './Classwork/Counter/Counter';
import Form from './Classwork/Form/Form';
import UserCard from './Classwork/UserCard/UserCard';

// homework

// import UserCard1 from './Homework1/User/UserCard1';
// import Stats from './Homework1/Stats/Stats';
// import pricingPlanItem from './Homework1/PriceItem/PriceItem';

// const user = {
//   name: 'Jacques Gluke',
//   tag: '@jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const stats = [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      logoTitle: 'ReactApp',
      count: 0,
      users: [],
    };
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  onIncrement = () => {
    if (this.state.count > 0)
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
  };

  onSubmit = data => {
    // console.log('submData', data);
    const { users } = this.state;
    const newUsers = [...users];
    const userData = data;
    userData.id = new Date().getTime();
    newUsers.push(data);

    this.setState({
      users: newUsers,
    });
  };
  // hw
  // onSubmit = data => {
  //   // console.log('submData', data);
  //   const { users } = this.state;
  //   const newUsers = [...users];
  //   const userData = data;
  //   userData.id = new Date().getTime();
  //   newUsers.push(data);

  //   this.setState({
  //     users1: newUsers,
  //   });
  // };

  render() {
    const { logoTitle, count, users } = this.state;
    return (
      <>
        <Header logoTitle={logoTitle} logged="true" />
        <Counter
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          count={count}
        />
        <Form onSubmit={this.onSubmit} />
        <ul>
          {users.length > 0 &&
            users.map(user => <UserCard key={user.id} {...user} />)}
        </ul>
        {/* //hw */}
        {/* <ul>
          {users.length > 0 &&
            users.map(user => <UserCard1 key={users.id} {...user} />)}
        </ul>
        <UserCard1 {...user} />
        <stats title="" stats={stats} /> */}
      </>
    );
  }
}

export default App;
