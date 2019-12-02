import React, {useState} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state={
        inputTodo : '',
    }
}
addTodo = ()=>{
  alert('To do added');
}
clearTodo = ()=>{
  alert('todo cleared');
}
onValueChange = (event)=>{
  const { value} = event.target;
  this.setState({
      inputTodo: value
  })
}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  
        inputTodo = {this.state.inputTodo}
        addTodo = {this.addTodo}
        clearTodo = {this.clearTodo}
        onValueChange = {this.onValueChange}
        />
      </div>
    );
  }
}

export default App;
