// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';


export default class TodoList extends Component{
    
    render(){
        return(
            <div>
         { console.log(this.props.todoList)}
          {this.props.todoList.map(todo =>{
            return <p>{todo.task}</p>;
          })}
            
            </div>
        )
    }

}