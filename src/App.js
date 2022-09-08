import { useState } from "react";
import Context from "./context";

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import TodoList from "./components/TodoList/TodoList";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";

import "./App.css";

function App() {
  const [isAddingTodo, setAddingTodo] = useState(false);
  const [isEditingTodo, setEditingTodo] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 123,
      title: "The first task title",
      description: `Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Etiam semper metus ut lobortis tincidunt. 
                    Ut ut lorem id orci suscipit feugiat mattis et ligula. 
                    Phasellus ac tempus tortor. Curabitur convallis nibh 
                    sed ex tempor, sit amet auctor lacus eleifend.`,
      categories: ["study", "entertainment", "work"],
      completed: false,
      isShown: true,
    },
  ]);

  const [currentTodo, setCurrentTodo] = useState(todos[0]);

  const updateTasks = (isChecked) => {
    if (!isChecked) {
      setTodos(
        todos.map((todo) => {
          if (todo.completed) {
            return {
              ...todo,
              isShown: false,
            };
          } else {
            return todo;
          }
        })
      );
    } else {
      setTodos(
        todos.map((todo) => {
          return {
            ...todo,
            isShown: true,
          };
        })
      );
    }
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const addTodo = (isAdding) => {
    setAddingTodo(isAdding);
  };

  const editTodo = (isEditingTodo, id) => {
    setEditingTodo(isEditingTodo);

    todos.map((item) => (item.id === id ? setCurrentTodo(item) : null));
  };

  const addNewTodo = (taskTitle, taskDescription) => {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title: taskTitle,
          description: taskDescription,
          categories: [],
          completed: false,
          isShown: true,
        },
      ])
    );
  };

  const editCurrentTodo = (title, description) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === currentTodo.id) {
          return {
            ...todo,
            title: title,
            description: description,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const setActiveCategories = () => {
    console.log(`setActiveCategories`);
  };

  return (
    <Context.Provider value={{ addTodo, editTodo }}>
      <div className="app">
        <Header />
        <div className="main">
          <Aside updateTasks={updateTasks} />
          <TodoList todos={todos} onToggle={toggleDone} />

          {isAddingTodo && (
            <AddTodoModal
              active={isAddingTodo}
              setActive={setAddingTodo}
              onCreateTask={addNewTodo}
              setActiveCategories={setActiveCategories}
            />
          )}

          {isEditingTodo && (
            <AddTodoModal
              isEdit
              active={isEditingTodo}
              setActive={setEditingTodo}
              onEditTask={editCurrentTodo}
              currentTodo={currentTodo}
            />
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
