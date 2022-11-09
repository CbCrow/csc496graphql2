import { graphql } from 'gatsby'
import React from 'react'
import Tags from '../components/tags'
import Category from '../components/category'
import PictureComponent from '../components/picture'
import CookTime from '../components/cooktime' 
import Servings from '../components/servings'
import PrepTime from '../components/preptime'
import Difficulty from '../components/difficulty'
import Summary from '../components/description'
import { titleSty } from '../components/recipeComponentStyles.module.css'


const pageTemplate = props => {

 const data = {
	  nodeFood:  props.pageContext.data
  }

  console.log(data);


  return (  
    // query MyQuery {
    //   Drupal {
    //     nodeRecipes(first: 100) {
    //       edges {
    //         node {
    //           changed
    //           id
    //           cookingTime
    //           created
    //           path
    //           status
    //           title
    //           difficulty
    //           mediaImage {
    //             mediaImage {
    //               url
    //             }
    //           }
    //           numberOfServings
    //           preparationTime
    //           tags {
    //             name
    //           }
    //           recipeCategory {
    //           }
    //           summary {
    //             value
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    
    
    //use components to display data
    <div>
      <h1 className={titleSty}>{data.nodeFood.title}</h1>
      <PictureComponent image={data.nodeFood.mediaImage.mediaImage.url} />
      <Summary summary={data.nodeFood.summary.value} />
      <Servings servings={data.nodeFood.numberOfServings} />
      <br />
      <PrepTime preparationTime={data.nodeFood.preparationTime} />
      <CookTime cookingTime ={data.nodeFood.cookingTime} />
      <br />
      <Difficulty difficulty={data.nodeFood.difficulty} />
      <Category category={data.nodeFood.recipeCategory} />
      <Tags tags={data.nodeFood.tags} />
    </div>
    
    


  )
}



export default pageTemplate 
