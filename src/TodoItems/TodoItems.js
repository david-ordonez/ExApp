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
        
        var itemArray = this.props.entries;
        for (var i = 0; i < itemArray.length; i++) {
            if (itemArray[i].text === event.target.textContent) {
                itemArray.splice(i,1);
                break;
            }
        }

        this.setState({items: itemArray});
        event.preventDefault();
    }

    render() {
        var todoItems = this.props.entries;

        if (todoItems.length > 0) {
            var lstItems = todoItems.map((item) => {
                return (
                    <li
                        key={item.key}
                        data-key={item.key}
                        className="todo-item"
                        draggable="true"
                        onDragStart={this.onDragStart}>
                        {item.text}
                    </li>
                );
            });
        }

        return (
            <ul onDragOver={this.allowDrop} onDrop={this.onDrop}>
                {lstItems}
            </ul>
        )
    }
}