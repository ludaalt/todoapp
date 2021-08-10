import { useContext } from 'react'
import s from './AddTodoButton.module.css'
import Context from '../../context'

const AddTodo = () => {
    const {addTodo} = useContext(Context)

    return (
        <button onClick={() => addTodo(true)} className={s.addTodoButton} title="Add New Todo">+</button>
    )
}

export default AddTodo