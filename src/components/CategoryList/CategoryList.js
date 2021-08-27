import { useState } from "react"

import s from './CategoryList.module.css'
import CategoryItem from "../CategoryItem/CategoryItem"

const CategoryList = ({titleItem}) => {
    const [categories, setCategories] = useState(['work', 'study', 'entertainment', 'family'])

    return (

        <ul className={s.categoryList}>
                {
                    categories.map((item, index) => (<li key={index}>           
                        <CategoryItem item={item} titleItem={titleItem} />                             
                    </li>))
                }
        </ul>

    )
}

export default CategoryList