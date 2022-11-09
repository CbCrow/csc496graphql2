import * as React from 'react'
import {servings} from '../components/recipeComponentStyles.module.css'

//servings component
const Servings = props => {
    return (
        <div className={servings}>
            <p>{props.servings} Servings</p>
        </div>
    )
}

//export servings component
export default Servings