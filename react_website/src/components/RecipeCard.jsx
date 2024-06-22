import { Link } from "react-router-dom";

export default function RecipeCard({
    recipeObject,
    width = 100,
    height = 50
}){
    const filePath = "/src/assets/img/page-exclusive/recipes/";

    return(
        <Link
            className="recipeCard"
            to={recipeObject.url}
        >   
            <h3>{recipeObject.name}</h3>
            <img src={filePath+recipeObject.imageName+"-xs"+recipeObject.imageType}/>
            <p className="italic">{"\""+recipeObject.description+"\""}</p>
            <p>Servings per package: {recipeObject.servings}</p>
        </Link>
    );
}