const defaultState: any = {
  todos: [
    {
      id: 123,
      title: 'The first task title',
      description: `Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Etiam semper metus ut lobortis tincidunt. 
                    Ut ut lorem id orci suscipit feugiat mattis et ligula. 
                    Phasellus ac tempus tortor. Curabitur convallis nibh 
                    sed ex tempor, sit amet auctor lacus eleifend.`,
      categories: ['study', 'entertainment', 'work'],
      completed: false,
      isShown: true,
    },
  ],
  addingTodo: false,
};

const ADDING_TODO = 'ADDING_TODO';

const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const UPDATE_TODO = 'UPDATE_TODO';

const FILTER_TODOS = 'FILTER_TODOS';

export const updateTodos = (state = defaultState, action: any): any => {
  switch (action.type) {
    case ADDING_TODO: {
      return {
        todos: [...state.todos],
        addingTodo: action.payload,
      };
    }

    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
        addingTodo: false,
      };
    }

    case FILTER_TODOS: {
      return {
        todos: state.todos.filter((todo: any) => todo.completed),
        addingTodo: false,
      };
    }

    default:
      return state;
  }
};

export const addingTodoAction = (payload: boolean) => {
  return { type: ADDING_TODO, payload };
};

export const addTodoAction = (payload: any) => {
  return { type: ADD_TODO, payload };
};

export const filterTodosAction = () => {
  return { type: FILTER_TODOS };
};
