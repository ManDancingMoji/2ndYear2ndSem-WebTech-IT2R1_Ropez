import '../assets/css/default.css';

import { recipes } from '../assets/js/recipe-data.jsx';


import NavBar from '../components/NavBar.jsx';
import RecipeCard from '../components/RecipeCard.jsx';

let assetsUrl = "../assets/";

export default function Recipes(){
    const recipesList = recipes.map(recipe => (
            <RecipeCard
                recipeObject={recipe}
            />
        )
    )

    return (
        <body>  
            <NavBar />
            <div className="catalogue flex_container">{recipesList}</div>
        </body>
    );
}