import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

let todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Do laundry',
    id: 1528839077286,
    completed: false
  },
  {
    task: 'Finish stretch goals',
    id: 1528817077220,
    completed: false
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state={
        inputTodo : '',
        todos : todoList,
    }
}
addTodo = (event)=>{
  event.preventDefault();
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
        <TodoList todos= {this.state.todos} />
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
