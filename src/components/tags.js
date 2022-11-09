import * as React from 'react'
import {tags, tagsUl} from '../components/recipeComponentStyles.module.css'

//tags component over array
const Tags = props => {
    return (
        <div className={tags}>
            <h1>Tags</h1>
            <ul className={tagsUl}>
                {props.tags.map(tag => (
                    <li>{tag.name}</li>
                ))}
            </ul>
        </div>
    )
}
       
//export tags component
export default Tags

