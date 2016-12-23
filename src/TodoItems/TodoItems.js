import React, {Component} from 'react';
import './TodoItems.css'

export default class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.onDragStart = this
            .onDragStart
            .bind(this);

        this.onDragEnd = this
            .onDragEnd
            .bind(this);

    }

    onDragEnd(event) {
        var itemArray = this.props.entries;
        for (var i = 0; i < itemArray.length; i++) {
            if (itemArray[i].text === event.target.textContent) {
                itemArray.splice(i, 1);
                break;
            }
        }

        this.setState({items: itemArray});
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
                    <div key={item.key}
                        className="todo-item"
                        draggable="true"
                        onDragStart={this.onDragStart}
                        onDragEnd={this.onDragEnd}>
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