import { useState } from 'react';
import BannerNav from '../components/BannerNav';
import Footer from '../components/Footer';
import RecipeDetails from '../components/RecipeDetails';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recipes = () => {
    const [id, setId] = useState();
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [sourceUrl, setSourceUrl] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [servings, setServings] = useState();
    const [cuisine, setCuisine] = useState([]);
    const [diets, setDiets] = useState([]);

    const [procedure, setProcedure] = useState([]);

    const [loading, setLoading] = useState(false);

    const getDessert = () => {
        var acc1_key = "1086348ae7cb452d8af4701cf23fefce"
        var acc2_key = "12f48c335d5a410494f64fead179ab30"
        var acc3_key = "dd02296314b245d9b7c917379ed2aa5a"
        var apiKey = acc2_key
        var type = "dessert"
        var recipeUrl = ("https://api.spoonacular.com/recipes/complexSearch?apiKey="
            + apiKey
            + "&limitLicense=true&number=1&instructionsRequired=true&addRecipeInformation=true&sort=random&type="
            + type
            + "&equipment=oven")
        fetch(recipeUrl)
        .then(response => {
            setLoading(true)
            return response.json();
        })
        .then(json => previewRecipe(json))
        .catch(err => alert("Error from Recipes.js: " + err))
    }

    const previewRecipe = (dessertJson) => {

        setLoading(true)

        // Preview recipe: Photo, name, source url, summary, ID (hidden)
        let id = dessertJson.results[0].id;
        let photo = dessertJson.results[0].image;
        let name = dessertJson.results[0].title;
        let summary = dessertJson.results[0].summary;
        let sourceUrl = dessertJson.results[0].sourceUrl;
        setId(id)
        setPhoto(photo)
        setName(name)
        setSummary(summary)
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

        let procedure = [];
        dessertJson.results[0].analyzedInstructions[0].steps.forEach((steps) => {
            let editedString = steps.step.replace(".", ". ").replace(",", ", ")
            procedure.push(editedString)
        });
        setProcedure(procedure)

        setLoading(false)
    }

    return (
        <div>
            <BannerNav/>
            <br /><br />
            <h2>Sweet selections await!</h2><br /><br />
            <h2>Explore our world of recipes ~</h2><br /><br />
            <Button variant="primary" style={{width: '20%'}} onClick={getDessert}>Discover a surprise dessert</Button><br /><br />
            {
                loading ? (
                    <Spinner animation='border' role='status' variant="primary" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        {
                            id &&
                            <div>
                                <br />
                                <Container className="bg-primary-subtle text-primary-emphasis">
                                    <Row>
                                        <Col fluid="md">
                                            <br />
                                            <Image src={photo} width="500" length="500" rounded />
                                        </Col>
                                        <Col fluid="md">
                                            <br />
                                            {name && <h4>{name}</h4>}
                                            {/* {id && <h4>{id}</h4>} */}
                                            {sourceUrl && <span style={{ color: 'blue' }}><a href={sourceUrl}>Link to source</a></span>}
                                            <br /><br />
                                            {prepTime && <span>Preparation time: {prepTime}</span>}
                                            <br /><br />
                                            {servings && <span>Servings: {servings}</span>}
                                            <br /><br />
                                            {cuisine.length > 0 && <span>Cuisine: {cuisine.join(" / ")}</span>}
                                            <br /><br />
                                            {diets.length > 0 && <span>Diet: {diets.join(", ")}</span>}
                                        </Col>
                                        <Col fluid="md">
                                            <br/>
                                            {summary && <div dangerouslySetInnerHTML={{ __html: summary }}></div>}
                                        </Col>
                                    </Row>
                                    <br />
                                </Container>
                                <br />
                                {id && <RecipeDetails id={id} procedure={procedure} />}

                            </div>
                        }
                    </div>
                ) 
            }
            <br/><br/>
            <Footer/>
        </div>
    );
}

export default Recipes