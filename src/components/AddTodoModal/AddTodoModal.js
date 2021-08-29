import {useState, useEffect, useContext} from 'react'
import s from './AddTodoModal.module.css'
import Context from '../../context'

import CategoryList from '../CategoryList/CategoryList'

const AddTodoModal = ({setActive, onCreateTask, isEdit, onEditTask, currentTodo }) => {
 
    const [taskTitle, setTaskTitle] = useState(isEdit ? currentTodo.title : '')
    const [taskDescription, setTaskDescription] = useState(isEdit ? currentTodo.description.toString().replace(/\s+/g, ' ').trim() : '')

       
    const submitHandler = (e) => {
        e.preventDefault();

        if(taskTitle.trim()) {
            if(isEdit) {
                onEditTask(taskTitle, taskDescription)
            } else {
                onCreateTask(taskTitle, taskDescription)
                setTaskTitle('')
            }            
            setActive(false)
        }
    }

    const handleChangeInput = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleChangeArea = (e) => {
        setTaskDescription(e.target.value);
    }

    return (
        <div className={s.modalWrap} onClick={() => setActive(false)}>
            <div className={s.modalBody} onClick={e => e.stopPropagation()}>
                <form className={s.modalForm} onSubmit={submitHandler}>
                    <label htmlFor="todoTitle">Title</label>
                    <input 
                        id="todoTitle" 
                        type="text" 
                        placeholder="add a title..." 
                        value={ taskTitle }
                        onChange={ handleChangeInput }
                    />


                    <label htmlFor="todoDescription">Description</label>
                    <textarea 
                        id="todoDescription" 
                        rows="5" 
                        placeholder="add a description"
                        value={ taskDescription }
                        onChange={ handleChangeArea }
                    ></textarea>

                    <div className={s.modalControl}>
                        <button type="button" className={s.modalButtonCancel} onClick={() => setActive(false)}>Cancel</button>
                        <button type="submit" className={s.modalButtonAdd}>
                            {isEdit ? 'Edit' : 'Add'}
                        </button>
                    </div>
                </form>
                
                <div>
                    <h3>Tags</h3>
                    <CategoryList titleItem={true} activeItem={true} /> 
                </div>               
               
            </div>
        </div>
    )
}

export default AddTodoModal