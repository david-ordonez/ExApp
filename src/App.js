import React, { Component } from 'react';
import TodoList from './TodoList.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
          <div>
              <TodoList/>
           </div>
      </div>
    );
  }
}
