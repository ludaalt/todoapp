import { useState, useEffect } from 'react';
import s from './Aside.module.css';
import CategoryList from '../CategoryList/CategoryList';

const Aside = ({ updateTasks }) => {
    const [checked, setChecked] = useState(false)

    return (
        <aside className={s.aside}>
            <CategoryList titleItem={true} /> 

            <form>
                <input 
                    onClick={() => { updateTasks(checked) }}
                    onChange={() => setChecked(!checked)} 
                    type="checkbox" 
                    id="checkbox" 
                    checked={checked} 
                />
                <label htmlFor="checkbox">Hide Done Tasks</label>
            </form>

        </aside>
    )
}

export default Aside;