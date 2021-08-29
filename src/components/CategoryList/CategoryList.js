import { useState } from "react"

import s from './CategoryList.module.css'
import CategoryItem from "../CategoryItem/CategoryItem"

const CategoryList = ({titleItem, activeItem}) => {
    const [categories, setCategories] = useState({
        'work': false, 
        'study': false,
        'entertainment': false,
        'family': false,
    })

    return (

        <ul className={s.categoryList}>
            {
                categories.map((item, index) => (
                        
                    <li className={s.categoryListItem} key={index}>           
                        <CategoryItem 
                            item={item} 
                            titleItem={titleItem}
                            activeItem={activeItem} 
                        />                             
                    </li> 
                ))

                
            }
        </ul>

    )
}

export default CategoryList