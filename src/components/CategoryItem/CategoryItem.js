import s from './CategoryItem.module.css'
import cl from 'classnames'

const CategoryItem = ({item, titleItem}) => {
     
    const classesToApply = cl(s.category, 
        item === 'work' ?  s.work : '',
        item === 'study' ?  s.study : '',
        item === 'entertainment' ?  s.entertainment : '',
        item === 'family' ?  s.family : '',    
      );


    return (
        <button className={s.colorButton}>
            <span className={classesToApply} aria-label="todo-category"></span>
                {/* {titleItem && item} */}
                {titleItem && item}
        </button>
    )
}

export default CategoryItem