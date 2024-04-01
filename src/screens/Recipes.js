import { useState } from 'react';
import BannerNav from '../components/BannerNav';
import Footer from '../components/Footer';
import RecipeDetails from '../components/RecipeDetails';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
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
        .catch(err => alert(err))
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

        setLoading(false)
    }

    return (
        <div>
            <BannerNav/>
            <br /><br />
            <h4>Sweet selections await!</h4>
            <h5>Explore our world of recipes ~</h5>
            <Button variant="primary" onClick={getDessert}>Discover a surprise dessert</Button>
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
                                    <Card className="d-flex justify-content-center align-items-center vh-80">
                                    <Container>
                                        <Card.Header>
                                            <Card.Title>{name && <h4>{name} {id}</h4>}</Card.Title>
                                        </Card.Header>
                                        <Row>
                                            <Col fluid="md">
                                                <Image src={photo} width="500" length="500" rounded />
                                            </Col>
                                            <Col fluid="md">
                                                {sourceUrl && <span style={{ color: 'blue' }}><a href={sourceUrl}>Link to source</a></span>}
                                                <br />
                                                {prepTime && <span>Preparation time: {prepTime}</span>}
                                                <br />
                                                {servings && <span>Serves: {servings} people</span>}
                                                {cuisine.length > 0 && <span>Cuisine: {cuisine.join(" / ")}</span>}
                                                <br />
                                                {diets.length > 0 && <span>Diet: {diets.join(", ")}</span>}
                                            </Col>
                                            <Col fluid="md">
                                                <Card.Text>
                                                    {summary && <div dangerouslySetInnerHTML={{ __html: summary }}></div>}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                                <br /><br />
                                {id && <RecipeDetails id={id} />}
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