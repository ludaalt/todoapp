import { useState } from 'react'
import Context from './context';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import TodoList from './components/TodoList/TodoList';
import AddTodoModal from './components/AddTodoModal/AddTodoModal'

import './App.css';

function App() {
  const [isAddingTodo, setAddingTodo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 123,
      title: 'The first task title', 
      description: `Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Etiam semper metus ut lobortis tincidunt. 
                    Ut ut lorem id orci suscipit feugiat mattis et ligula. 
                    Phasellus ac tempus tortor. Curabitur convallis nibh 
                    sed ex tempor, sit amet auctor lacus eleifend.`, 
      categories: ['study', 'entertainment', 'work'],
      completed: false},
  ]);


  const toggleDone = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  

  const addTodo = (value) => {
    setAddingTodo(value)
  }

  const addNewTodo = (taskTitle, taskDescription) => {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title: taskTitle,
          description: taskDescription,
          categories: [],
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{addTodo}}>
      <div className="app">
        <Header />
        <div className="main">
          <Aside />
          <TodoList todos={todos} onToggle={toggleDone} /> 

          {isAddingTodo && <AddTodoModal active={isAddingTodo} setActive={setAddingTodo} onCreateTask={addNewTodo} />}
        </div>       


      </div>  
    </Context.Provider>  
  );
}

export default App;
