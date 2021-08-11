import { useState } from 'react';
// import cl from 'classnames';
import s from './Aside.module.css';
import CategoryList from '../CategoryList/CategoryList';

const Aside = () => {

    return (
        <aside>
            <CategoryList titleItem={true} />

            <form>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Hide Done Tasks</label>
            </form>

        </aside>
    )
}

export default Aside;