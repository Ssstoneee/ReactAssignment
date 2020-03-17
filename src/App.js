import React,{Component} from 'react';
// import logo from './logo.svg';
import TodoItem from './TodoItem/TodoItem'
import todoData from './todoData'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //Update state so that the item with the given id change `completed` from 
  //false to true (or vise versa)
  handleClick(id) {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }


  render() {
    const todoItems = this.state.todos.map(item => 
    <TodoItem key={item.id} item={item} handleClick={this.handleClick} />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
  
}

export default App;
