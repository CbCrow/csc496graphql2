import * as React from 'react'
import {prepTime} from '../components/recipeComponentStyles.module.css'

//prepartion time component
const PreTime = props => {
    return (
        <div className={prepTime}>
            <p>{props.preparationTime} Minutes Prep Time</p>
        </div>
    )
}

//export preparation time component
export default PreTime
