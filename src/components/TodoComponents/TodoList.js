// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';
import Todo from './Todo';


export default class TodoList extends Component{
    
    render(){
        return(
            <div>
             {   console.log(this.props.todos)}
          {this.props.todos.map(todo =>{
            // return <p>{todo.task}</p>;
           return  <Todo todo = {todo} key={todo.id}/>
          })}
            
            </div>
        )
    }

}