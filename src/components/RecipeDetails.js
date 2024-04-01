import { useState, useEffect } from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import Ingredients from './Ingredients';
import Procedure from './Procedure';

const RecipeDetails = (props) => {
    
    // Ingredients
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(`Fetch data from web service`);
        getIngredients();
    }, [])

    const getIngredients = () => {
        console.log(`My recipe ID in RecipeDetails: ${props.id}`)
        var acc1_key = "1086348ae7cb452d8af4701cf23fefce"
        var acc2_key = "12f48c335d5a410494f64fead179ab30"
        var acc3_key = "dd02296314b245d9b7c917379ed2aa5a"
        var apiKey = acc2_key
        
        try {
            let apiURL = `https://api.spoonacular.com/recipes/${props.id}/ingredientWidget.json?apiKey=` + apiKey

            axios.get(apiURL)
            .then(response => {
                console.log(`response from API : ${JSON.stringify(response.data)}`);
                if (response.data !== undefined) {
                    setIngredients(response.data.ingredients)
                    setLoading(false)
                } else {
                    console.log(`No data provided from API`);
                    setLoading(false)
                }
            })
            .catch(err => {
                console.error(`Cannot access the data from API : ${err}`);
                setLoading(false)
            })
        } catch (error) {
            console.error(`Error while fetching data from API : ${error}`);
            setLoading(false)
        }
    }

    return(
        <div>
            {
                loading ? (
                    <Spinner animation='border' role='status' variant="primary" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <Ingredients array={ingredients} />
                            </Col>
                            <Col lg={8}>
                                <Procedure />
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </div>
    );
}

export default RecipeDetails