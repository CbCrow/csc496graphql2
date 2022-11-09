import * as React from 'react'
import {picture, pictureCircle} from '../components/recipeComponentStyles.module.css'
import { motion } from "framer-motion"

//nicely scaled image component
const Image = props => {
    return (
        <motion.div className={picture} whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.95 }}>
            <img src={props.image} className={pictureCircle} />
        </motion.div>
    )
}

//export image component
export default Image