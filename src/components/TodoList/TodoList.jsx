import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.css'

const TodoList = ({todos, onToggle}) => {
    return (
        <ul className={s.todoList}>
            {todos.length && todos.map((todo, index) => (
                todo && <TodoItem 
                    index={index} 
                    todo={todo}
                    key={todo.id}
                    onChangeDone={onToggle}
                />
            ))}
        </ul>
    )
}

export default TodoList