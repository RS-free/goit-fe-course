import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import StoreForm from '../../components/StoreForm/StoreForm';
import StoreList from '../../components/StoreList/StoreList';
import StoreHeader from '../../components/StoreHeader/StoreHeader';
import Cart from '../../components/Cart/Cart';
import classes from './StorePage.module.css';
import { addTodo, removeTodo, toggleComplete } from './storeActions';

class StorePage extends Component {
  state = {
    title: '',
    description: '',
    filter: 'all',
  };

  onHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = () => {
    const { add } = this.props;
    const id = new Date().getTime();
    const cost = Math.floor(Math.random() * 100);
    const { title, description } = this.state;

    add({ id, title, description, isCompleted: false, cost });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const { store, openCart } = this.props;
    let filtredStore;
    if (filter === 'completed') {
      filtredStore = store.filter(el => el.isCompleted);
    } else if (filter === 'inProgress') {
      filtredStore = store.filter(el => !el.isCompleted);
    } else {
      filtredStore = store;
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column wrap',
        }}
      >
        <h1 style={{ margin: '0 0 40px' }}>Store</h1>
        <StoreForm
          onHandleSubmit={this.onHandleSubmit}
          onHandleInput={this.onHandleInput}
        />
        <StoreHeader
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <StoreList
          onHandleChecked={this.onHandleChecked}
          onHandleDelete={this.onHandleDelete}
          data={filtredStore}
        />
        <CSSTransition
          in={openCart}
          timeout={1000}
          classNames={{
            enter: classes['fade-enter'],
            enterActive: classes['fade-enter-active'],
            exit: classes['fade-exit'],
            exitActive: classes['fade-exit-active'],
          }}
          unmountOnExit
        >
          <div className={classes.modal}>
            <Cart />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

StorePage.propTypes = {
  add: PropTypes.func.isRequired,
  store: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  store: state.store,
  openCart: state.cart.isOpened,
});

const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(addTodo(todo)),
  remove: id => dispatch(removeTodo(id)),
  onToggleComplete: id => dispatch(toggleComplete(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StorePage);
