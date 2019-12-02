import React, {Component} from 'react';

export default class Todo extends Component{
 render(){
     return(
     <p>{this.props.todo.task}</p>
     )
 }
}