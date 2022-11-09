import * as React from 'react'
import {cookingTime} from '../components/recipeComponentStyles.module.css'

//cook time component
const CookTime = props => {
    return (
        <div className={cookingTime}>
            <p>{props.cookingTime} Minutes Cook Time</p>
        </div>
    )
}

//export cook time component
export default CookTime
