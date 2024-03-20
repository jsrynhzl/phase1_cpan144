import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToRecipes = () => {
        navigate("/recipes")
    }

    const goToSubscribe = () => {
        navigate("/subscribe")
    }

    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <button onClick={goToHome}>Visit Home page</button>
            <button onClick={goToRecipes}>Visit the Recipes page to get a recipe</button>
            <button onClick={goToSubscribe}>Visit the Subscribe page to get notified on new recipes</button>
        </div>
    );
}

export default NotFound;