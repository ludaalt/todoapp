import { useState, useContext, useEffect, useRef } from 'react'
import s from './TodoItem.module.css';
import Context from '../../context'

import CategoryItem from '../CategoryItem/CategoryItem';

const TodoItem = ({todo, onChangeDone}) => {
    const [isVisibleControls, setVisibleControls] = useState(false)
    
    const todoClasses = [s.todoItem]

    if(todo.completed) {
        todoClasses.push(s.done)
    }

    if(!todo.isShown) {
        todoClasses.push(s.hide)
    }

    const controlButton = useRef();
    const {editTodo, currentTodo = todo} = useContext(Context)

    useEffect(() => {
        document.onclick = function(e) {
            if ( e.target != this.controlButton && isVisibleControls ) {
                setVisibleControls(false)
            };
        };
    });

    return (
        todo && <div className={todoClasses.join(' ')}>
            <header className={s.todoHeader}>
                <h2>{todo.title}</h2>

                <div className={s.controlButtonWrap}>
                    <button onClick={() => setVisibleControls(!isVisibleControls)} className={s.controlButton} ref={controlButton}>
                    </button>
                    { isVisibleControls &&                   
                        <div className={s.controlButtonContent}>
                            <button className={s.controlButtonItem} 
                                    onClick={() => editTodo(true, todo.id)}
                            >Edit
                            </button>
                            <button className={s.controlButtonItem}>Delete</button>
                        </div>
                    }
                </div>
                
            </header>
            <p className={s.todoDescription}>{todo.description}</p>
            
            <div className={s.controlPanel}>
                <ul className={s.todoCategories}>
                    {todo.categories &&
                        todo.categories.map((item, index) => (<li key={index} title={item}>
                            <CategoryItem item={item} />                        
                        </li>))
                    }
                </ul>

                <form>
                    <input 
                        type="checkbox" 
                        id={todo.id} 
                        checked={todo.completed}
                        onChange={() => onChangeDone(todo.id)}
                    />
                    <label htmlFor={todo.id}>Done</label>
                </form>

            </div>
        </div>
    )
}

export default TodoItem