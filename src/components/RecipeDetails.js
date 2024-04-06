import { useState, useEffect } from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import Ingredients from './Ingredients';
import Procedure from './Procedure';

const RecipeDetails = (props) => {
    
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsPic, setIngredientsPic] = useState([]);
    const [ingredientsWidget, setIngredientsWidget] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getIngredients();
    }, [])

    const getIngredients = () => {
        var acc1_key = "1086348ae7cb452d8af4701cf23fefce"
        var acc2_key = "12f48c335d5a410494f64fead179ab30"
        var acc3_key = "dd02296314b245d9b7c917379ed2aa5a"
        var apiKey = acc2_key
        
        try {
            let apiURL = `https://api.spoonacular.com/recipes/${props.id}/ingredientWidget.json?apiKey=` + apiKey
            axios.get(apiURL)
            .then(response => {
                if (response.data !== undefined) {
                    setIngredients(response.data.ingredients)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            })
            .catch(err => {
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
        }

        let ingredientPicURL = `https://api.spoonacular.com/recipes/${props.id}/ingredientWidget.png?apiKey=` + apiKey + `&measure=metric`
        
        fetch(ingredientPicURL)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setIngredientsPic(url);
            })
            .catch(err => alert("Error from RecipeDetails.js: " + err));

        // TODO
        // let ingredientsWidgetURL = `https://api.spoonacular.com/recipes/${props.id}/ingredientWidget?apiKey=` + apiKey + `&measure=metric`
        // fetch(ingredientsWidgetURL)
        //     .then(response => {
        //         setLoading(true)
        //         console.log(`My response.txt() is = ` + response.text())
        //         setIngredientsWidget(response.text())
        //     })
        //     .catch(err => alert("Error from Recipes.js: " + err))
        
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
                            <Col lg={5}>
                                <Ingredients array={ingredients} photo={ingredientsPic}/>
                            </Col>
                            <Col lg={7}>
                                <Procedure steps={props.procedure}/>
                            </Col>
                        </Row>
                            {ingredientsWidget && <div dangerouslySetInnerHTML={{ __html: ingredientsWidget }}></div>}
                    </Container>
                )
            }
        </div>
    );
}

export default RecipeDetails