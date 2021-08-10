import { useState } from 'react';
// import cl from 'classnames';
import s from './Aside.module.css';
import CategoryItem from '../CategoryItem/CategoryItem';

const Aside = () => {
    const [categories, setCategories] = useState(['work', 'study', 'entertainment', 'family'])

    return (
        <aside>
            <ul className={s.categoryList}>
                {
                    categories.map((item, index) => (<li key={index}>            
                        <CategoryItem item={item} titleItem={true}/>                            
                    </li>))
                }
            </ul>

            <form>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Hide Done Tasks</label>
            </form>

        </aside>
    )
}

export default Aside;