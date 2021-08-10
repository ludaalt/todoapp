// import {useState} from 'react'
import s from './AddTodoModal.module.css'

const AddTodoModal = () => {
    return (
        <div className={s.modalWrap}>
            <div className={s.modalBody}>
                <form className={s.modalForm}>
                    <label htmlFor="todoTitle">Title</label>
                    <input id="todoTitle" type="text" placeholder="add a title..." />
                    <label htmlFor="todoDescription">Description</label>
                    <textarea id="todoDescription">add a description</textarea>
                    <div className={s.modalControl}>
                        <button>Cancel</button>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodoModal