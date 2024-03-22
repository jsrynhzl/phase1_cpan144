import { useState } from 'react';
import BannerNav from '../components/BannerNav';
import Footer from '../components/Footer';

const Recipes = () => {
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    const [prepTime, setPrepTime] = useState("");
    const [servings, setServings] = useState();
    const [diets, setDiets] = useState([""]);
    const [sourceUrl, setSourceUrl] = useState("");

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
            .then(json => UpdateUI(json))
            .catch(err => alert(err))
    }

    // Spoonacular
    const UpdateUI = (dessertsJson) => {
        // Preview recipe: Photo, name, source
        let id = dessertsJson.results[0].id;
        let photo = dessertsJson.results[0].image;
        let name = dessertsJson.results[0].title;
        let sourceUrl = dessertsJson.results[0].sourceUrl;
        setId(id)
        setPhoto(photo)
        setName(name)
        setSourceUrl(sourceUrl)

        // Preview recipe: Preparation time
        let prepInMins = dessertsJson.results[0].readyInMinutes;
        var hours = Math.floor(prepInMins / 60)
        var minutes = prepInMins % 60
        if (hours === 0) {
            setPrepTime(minutes + " minute/s")
        } else {
            setPrepTime(hours + " hour/s and " + minutes + " minute/s")
        }

        // Preview recipe: Number of servings and Types of diets
        let servings = dessertsJson.results[0].servings;
        let diets = [];
        dessertsJson.results[0].diets.forEach((diet) => {
            diets.push(diet)
        });
        setServings(parseInt(servings))
        setDiets(diets)
    }

    return (
        <div>
            <BannerNav/>
            <h4>Dessert Recipe Generator</h4>
            <button type="button" onClick={getDessert}>Get a random dessert</button>
            <br /><br />
            <img src={photo} alt={name} />
            <br />
            {name && <b>{name} {id}</b>}
            <br />

            {sourceUrl && <span style={{ color: 'blue' }}><a href={sourceUrl}>Link to source</a></span>}
            <br /><br />
            {prepTime && <span>Preparation time: {prepTime}</span>}
            <br /><br />
            {servings && <span>Serves: {servings} people</span>}
            <br /><br />
            {servings && <span>Diets: {diets.join(", ")}</span>}
            <br />
            <Footer/>
        </div>
    );
}

export default Recipes