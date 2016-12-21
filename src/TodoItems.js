import React, {Component} from 'react';
import './TodoItems.css'

export default class TodoItems extends Component {
    render() {
        var todoItems = this.props.entries;
        function createTask(item) {
            return <div className="task-card">{item.text}</div>
        }

        var lstItems = todoItems.map(createTask);

        return (
            <div>
                {lstItems}
            </div>
        )
    }
}