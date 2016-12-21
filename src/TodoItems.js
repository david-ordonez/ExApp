import React, { Component } from 'react';
import './TodoItems.css'

export default class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(event) {
        event.dataTransfer.setData("text", event.target.textContent);
    }

    render() {
        var todoItems = this.props.entries;

        if (todoItems.length > 0) {
            var lstItems = todoItems.map((item) => {
                return (
                    <div className="task-card"
                        key={item.key}
                        draggable="true"
                        onDragStart={this.onDragStart}>
                        {item.text}
                    </div>
                );
            });
        }

        return (
            <div>
                {lstItems}
            </div>
        )
    }
}