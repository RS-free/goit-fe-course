import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodosForm from '../../components/TodosForm/TodosForm';
import TodosList from '../../components/TodosList/TodosList';
import TodosHeader from '../../components/TodosHeader/TodosHeader';
import { addTodo, removeTodo, toggleComplete } from './todosActions';

class TodosPage extends Component {
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
    const cost = Math.floor(Math.random() * Math.floor(100));
    const { title, description } = this.state;
    add({ id, title, description, isCompleted: false, cost });
  };

  onHandleDelete = id => {
    const { remove } = this.props;

    remove(id);
  };

  onHandleChecked = id => {
    const { onToggleComplete } = this.props;

    onToggleComplete(id);
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const { todos } = this.props;
    let filtredTodos;
    if (filter === 'completed') {
      filtredTodos = todos.filter(el => el.isCompleted);
    } else if (filter === 'inProgress') {
      filtredTodos = todos.filter(el => !el.isCompleted);
    } else {
      filtredTodos = todos;
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
        <h1 style={{ margin: '0 0 40px' }}>Todos</h1>
        <TodosForm
          onHandleSubmit={this.onHandleSubmit}
          onHandleInput={this.onHandleInput}
        />
        <TodosHeader
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <TodosList
          onHandleChecked={this.onHandleChecked}
          onHandleDelete={this.onHandleDelete}
          data={filtredTodos}
        />
      </div>
    );
  }
}

TodosPage.propTypes = {
  add: PropTypes.func.isRequired,
  todos: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(addTodo(todo)),
  remove: id => dispatch(removeTodo(id)),
  onToggleComplete: id => dispatch(toggleComplete(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosPage);
