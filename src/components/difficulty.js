import * as React from 'react'
import {difficulty} from '../components/recipeComponentStyles.module.css'


//difficulty component
const Difficulty = props => {
    return (
        <div className={difficulty}>
            <h2>Difficulty {props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}</h2>
        </div>
    )
}

//export difficulty component
export default Difficulty