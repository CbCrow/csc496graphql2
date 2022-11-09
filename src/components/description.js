import * as React from 'react'
import {description} from '../components/recipeComponentStyles.module.css'

//summary/description component
const Description = props => {
    return (
        <div className={description}>
            <h2>Description</h2>
            <p>{props.summary}</p>
        </div>
    )
}


//export description component
export default Description
