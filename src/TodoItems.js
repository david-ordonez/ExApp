import React, { Component } from 'react';

export default class TodoItems extends Component{
    render(){
        var todoItems = this.props.entries;
        function createTask(item){
            return <div>{ item.text }</div>
        }

        var lstItems = todoItems.map(createTask);

        return (
            <div>
            { lstItems}
            </div>
        )
    }
}