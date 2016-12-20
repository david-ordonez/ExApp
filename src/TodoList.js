import React, { Component } from 'react'
import TodoItems from './TodoItems.js'



class TodoList extends Component{
    constructor(props){
        super(props);        
        this.state = {
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
	var itemArray = this.state.items;

   	itemArray.push({
		text : this._inputElement.value,
		key : Date.now()
	});

	this.setState({
		items : itemArray
	});

	this._inputElement.value = "";	
    event.preventDefault();
    }

    render(){
        return(
            <form onSubmit= { this.handleSubmit }>
            <div>
                <input placeholder="Enter Task here" ref={(a) => this._inputElement = a}>
                </input>
                <button type="submit">Add</button>
            </div>
            <div>
                <TodoItems entries={ this.state.items }/>
            </div>
            </form>
        );
    }
}

export default TodoList;
