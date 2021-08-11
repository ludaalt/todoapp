import {useState} from 'react'
import s from './AddTodoModal.module.css';

// import CategoryItem from '../CategoryItem/CategoryItem';
import CategoryList from '../CategoryList/CategoryList'

const AddTodoModal = ({active, setActive, onCreateTask}) => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        if(taskTitle.trim()) {
            onCreateTask(taskTitle, taskDescription)
            setTaskTitle('')
            setActive(false)
        }
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
                        value={taskTitle} 
                        onChange={e => setTaskTitle(e.target.value) }
                    />


                    <label htmlFor="todoDescription">Description</label>
                    <textarea 
                        id="todoDescription" 
                        rows="5" 
                        placeholder="add a description"
                        value={taskDescription}
                        onChange={e => setTaskDescription(e.target.value)}
                    ></textarea>

                    <div className={s.modalControl}>
                        <button type="button" className={s.modalButtonCancel} onClick={() => setActive(false)}>Cancel</button>
                        <button type="submit" className={s.modalButtonAdd}>Add</button>
                    </div>
                </form>
                
                <div>
                    <h3>Tags</h3>
                    <CategoryList titleItem={true} />
                </div>               
               
            </div>
        </div>
    )
}

export default AddTodoModal