import React, { Component } from 'react';

export default class TodoItems extends Component{
    render(){
        var todoItems = this.props.entries;
        function createTask(item){
            return <li key={ item.key }>{ item.text }</li>
        }

        var lstItems = todoItems.map(createTask);

        return (
            <ul>
            { lstItems}
            </ul>
        )
    }
}