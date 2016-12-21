import React, {Component} from 'react';
import TodoList from './TodoList.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="task-dashboard_box">
        <div className="task-dashboard_col">
          <TodoList title="ToDo"/>
        </div>
        <div className="task-dashboard_col">
          <TodoList title="In Progress"/>
        </div>
        <div className="task-dashboard_col">
          <TodoList title="Done"/>
        </div>
      </div>
    );
  }
}
