import React, {Component} from 'react';
import './Todo.css';


export default class Todo extends Component{
   
 render(){
     return(
     <p 
     onClick={()=>this.props.crossTodo(this.props.todo.id)}
     className =  {this.props.todo.completed ? 'completed' : '' }
     >
         {this.props.todo.task}
         </p>
     )
 }
}