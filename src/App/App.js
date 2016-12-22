import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="todolist-container">
        <div className="todolist-col">
          <TodoList title="ToDo" />
        </div>
        <div className="todolist-col">
          <TodoList title="In Progress" />
        </div>
        <div className="todolist-col">
          <TodoList title="Done" />
        </div>
      </div>
    );
  }
}
