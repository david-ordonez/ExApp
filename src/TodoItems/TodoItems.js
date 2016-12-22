import React, {Component} from 'react';
import './TodoItems.css'

export default class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.onDragStart = this
            .onDragStart
            .bind(this);
        this.allowDrop = this
            .allowDrop
            .bind(this);
        this.onDrop = this
            .onDrop
            .bind(this);
    }

    allowDrop(event) {
        event.preventDefault();
    }

    onDrop(event) {
        var data = event
            .dataTransfer
            .getData("text");
        var itemArray = this.props.entries;

        itemArray.push({
            text: data,
            key: Date.now()
        });

        this.setState({items: itemArray});
        event.preventDefault();
    }

    onDragStart(event) {
        event.dataTransfer.effectAllowed = "move";
        event
            .dataTransfer
            .setData("text", event.target.textContent);
    }

    render() {
        var todoItems = this.props.entries;

        if (todoItems.length > 0) {
            var lstItems = todoItems.map((item) => {
                return (
                        <div className="todo-item" key={item.key} draggable="true" onDragStart={this.onDragStart}>
                            {item.text}
                        </div>
                );
            });
        }

        return (
            <div onDragOver={this.allowDrop} onDrop={this.onDrop}>
                {lstItems}
            </div>
        )
    }
}