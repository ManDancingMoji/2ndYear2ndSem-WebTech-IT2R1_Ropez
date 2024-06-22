import '../assets/css/default.css';

import { useParams } from 'react-router-dom';
import { recipes } from '../assets/js/recipe-data.jsx';
import NavBar from '../components/NavBar.jsx';


const imagePath = '/src/assets/img/page-exclusive/recipes/';

export default function Recipe(){
    const params = useParams();
    const recipeObject = recipes.find((recipe) => recipe.url === params.url);

    const imageSize = (visualViewport.width < 800 ? "-s" : "")

    if (recipeObject === undefined){
        return <p>No <code>recipeObject</code> prop is passed to <code>&lt;Recipe /&gt;</code> component.</p>
    } else if (typeof(recipeObject) !== 'object') {
        return <p>Incorrect prop <code>{typeof(recipeObject)}</code> is passed to <code>&lt;recipe /&gt;</code> component. Please pass the correct type : <code>object</code></p>
    }

    let ingredientsResult = (
        recipeObject.ingredients.length > 0 ?
            recipeObject.ingredients.map(
            ingredient =>(
                <li>
                    {ingredient.quantity} {
                    (ingredient.unit !== null ?
                        ingredient.quantity > 1 ?
                            ingredient.unit+"s of"
                        : ingredient.unit+" of"
                    : " ")} <i>{ingredient.name}</i>
                </li>
            )
        )
        : null
    );

    let stepsResult = (
        recipeObject.steps.length > 0 ?
            recipeObject.steps.map(
            step =>(
                <li>
                    {step}
                </li>
            )
        )
        : null
    );

    let imageResult = (
        recipeObject.imageName !== null && recipeObject.imageName !== "" ?
            (
                <img src={imagePath+recipeObject.imageName+imageSize+recipeObject.imageType}/>
            )
        : null
    );

    return (
        <body>
            <NavBar />
            
            <h1 id="title">{"How to make "+recipeObject.name}</h1>

            <div id="body" className='flex_container'>
                <div className="flex_item">
                    {imageResult}
                    
                </div>
                <div className="flex_item">
                
                <h2 id="ingredients">Ingredients</h2>
                    <ul>
                        {ingredientsResult}
                    </ul>
                
                    <h2>Steps</h2>
                    <ol>
                        {stepsResult}
                    </ol>

                </div>
            </div>
        </body>
    );
}