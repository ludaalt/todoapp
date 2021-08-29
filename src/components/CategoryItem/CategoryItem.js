import { useState, useEffect } from 'react';
import s from './CategoryItem.module.css'
import cl from 'classnames'

const CategoryItem = ({item, titleItem, activeItem}) => {

    const [isActive, setActive] = useState(false)
     
    const classesToApply = cl(s.category, 
        item === 'work' ?  s.work : '',
        item === 'study' ?  s.study : '',
        item === 'entertainment' ?  s.entertainment : '',
        item === 'family' ?  s.family : '',    
    );

    useEffect(() => {
        activeItem = isActive;
    }); 
    
    return (
        <button className={isActive ? `${s.colorButton} ${s.categoryActive}` : s.colorButton} 
                onClick={() => setActive(!isActive)}
        >
            <span className={classesToApply} aria-label="todo-category"></span>
                {titleItem && item}
        </button>
    )
}

export default CategoryItem