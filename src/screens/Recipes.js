import { useState } from 'react';
import BannerNav from '../components/BannerNav';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';

const Recipes = () => {
    const [id, setId] = useState();
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [sourceUrl, setSourceUrl] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [servings, setServings] = useState();
    const [cuisine, setCuisine] = useState([]);
    const [diets, setDiets] = useState([]);
    
    // TODO: measurements, ingredients

    const getDessert = () => {
        var apiKey = "1086348ae7cb452d8af4701cf23fefce"
        var type = "dessert"
        var searchUrl = ("https://api.spoonacular.com/recipes/complexSearch?apiKey="
            + apiKey
            + "&limitLicense=true&number=1&instructionsRequired=true&addRecipeInformation=true&sort=random&type="
            + type
            + "&equipment=oven")
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(json => updateUI(json))
            .catch(err => alert(err))
    }

    // Spoonacular
    const updateUI = (dessertJson) => {
        previewRecipe(dessertJson)
        // showIngredients(dessertJson)
        // showProcedure(dessertJson)
    }

    const previewRecipe = (dessertJson) => {
        // Preview recipe: Photo, name, source url, ID (hidden)
        let id = dessertJson.results[0].id;
        let photo = dessertJson.results[0].image;
        let name = dessertJson.results[0].title;
        let sourceUrl = dessertJson.results[0].sourceUrl;
        setId(id)
        setPhoto(photo)
        setName(name)
        setSourceUrl(sourceUrl)

        // Preview recipe: Preparation time
        let prepInMins = dessertJson.results[0].readyInMinutes;
        var hours = Math.floor(prepInMins / 60)
        var minutes = prepInMins % 60
        if (hours === 0) {
            setPrepTime(minutes + " minute/s")
        } else {
            setPrepTime(hours + " hour/s and " + minutes + " minute/s")
        }

        // Preview recipe: Number of servings, Cuisines, and Types of diets
        let servings = dessertJson.results[0].servings;
        let cuisineArray = [];
        dessertJson.results[0].cuisines.forEach((cuisine) => {
            cuisineArray.push(cuisine)
        });
        let diets = [];
        dessertJson.results[0].diets.forEach((diet) => {
            diets.push(diet)
        });
        setServings(parseInt(servings))
        setCuisine(cuisineArray)
        setDiets(diets)
    }

    return (
        <div>
            <BannerNav/>
            <h2>Get a random recipe</h2>
            <Button variant="primary" onClick={getDessert}>Discover a surprise dessert</Button>
            {/* <button type="button" onClick={getDessert}>Get a random dessert</button> */}
            <br /><br />
            <img src={photo} alt={name} />
            <br />
            {name && <b>{name} {id}</b>}
            <br />

            {sourceUrl && <span style={{ color: 'blue' }}><a href={sourceUrl}>Link to source</a></span>}
            <br />
            {prepTime && <span>Preparation time: {prepTime}</span>}
            <br />
            {servings && <span>Serves: {servings} people</span>}
            <br />
            {cuisine.length > 0 && <span>Cuisine: {cuisine.join(" / ")}</span>}
            <br />
            {diets.length > 0 && <span>Diet: {diets.join(", ")}</span>}
            <br />
            <Footer/>
        </div>
    );
}

export default Recipes