import React, {Component} from 'react';

export default class TodoForm extends Component{
 
    
    render(){
        return(
            <form>
                <input name='inputTodo' placeholder='...todo' onChange={this.props.onValueChange} value={this.props.inputTodo} />
                <br/>
                <button onClick= {this.props.addTodo}>AddTodDo</button>
                <button onClick= {this.props.clearTodo}>Clear Completed</button>
        
            </form>
        );
    }


} 