import { graphql } from 'gatsby'
import React from 'react'

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
    //             name
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    

    <div>
      <h1>{data.nodeFood.title}</h1>
      <p>Cooking time is {data.nodeFood.cookingTime} Minutes</p>
      <p>Prep times is {data.nodeFood.preparationTime} Minutes</p>
      <p>Difficulty {data.nodeFood.difficulty}</p>
      <p>{data.nodeFood.numberOfServings} Servings</p>
      <p>Ingredients dont work at all in the graphiql explorer so they are not here at the moment.</p>
      <img src={data.nodeFood.mediaImage.mediaImage.url} />
      <p>Tags</p>
      <ul>
        {data.nodeFood.tags.map((tag, index) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ul>
      <p>Categories</p>
      <ul>
        {data.nodeFood.recipeCategory.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
      
    </div>
  )
}



export default pageTemplate 
/*
export const query = graphql`
query MyQuery($nid: string) {
  Drupal {
       nodeRecipe(id: { eq: $nid } ) {
                  changed
                  id
                  cookingTime
                  created
                  path
                  status
                  title

          }

  }
}




`


*/