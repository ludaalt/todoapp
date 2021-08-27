import s from './CategoryItem.module.css'
import cl from 'classnames'

const CategoryItem = ({item, titleItem}) => {
     
    const classesToApply = cl(s.category, 
        item === 'work' ?  s.work : '',
        item === 'study' ?  s.study : '',
        item === 'entertainment' ?  s.entertainment : '',
        item === 'family' ?  s.family : '',    
    );

    const handleToggleActive = (e) => {
        if(!e.target.classList.contains('categoryActive')) {
           e.target.classList.add('categoryActive')
           console.log(1)
        }
        else {
            e.target.classList.remove('categoryActive')
            console.log(2) 
        }

        // e.target.classList.toggle('categoryActive')
    }


    return (
        <button className={s.colorButton} onClick={e => handleToggleActive(e)}>
            <span className={classesToApply} aria-label="todo-category"></span>
                {/* {titleItem && item} */}
                {titleItem && item}
        </button>
    )
}

export default CategoryItem