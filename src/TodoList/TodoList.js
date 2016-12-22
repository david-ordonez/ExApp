import React, { Component } from 'react';
import TodoItems from './TodoItems.js';
import './TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        var itemArray = this.state.items;

        if (this._inputElement.value === "")
            return false;

        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });

        this.setState({ items: itemArray });

        this._inputElement.value = "";
        event.preventDefault();
    }

    render() {
        return (
            <div className="todo-list">
                <h3 className="todo-list-header">{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TodoItems entries={this.state.items} />
                    </div>
                    <div>
                        <input
                            className="todo-item-textbox"
                            placeholder="Enter Task here"
                            ref={(a) => this._inputElement = a}></input>
                        <button className="buttonAdd" type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}
