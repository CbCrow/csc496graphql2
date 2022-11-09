import * as React from 'react'
import { category, categoryUl} from '../components/recipeComponentStyles.module.css'

//category component
const Category = props => {
    return (
        <div className={category}>
            <h1>Category</h1>
            <ul className={categoryUl}>
                {props.category.map(category => (
                    <li>{category.name}</li>
                ))}
            </ul>
        </div>
    )
}

//export tags component
export default Category