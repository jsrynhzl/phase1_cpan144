import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const Ingredients = (props) => {
    let ingredientsArray = props.array
    return(
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Ingredients</h3></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ListGroup as="ul">
                                {
                                    ingredientsArray.map(ingredient => (
                                        <ListGroup.Item as="li" >
                                            <h5>{ingredient.amount.metric.value}&nbsp;
                                            {ingredient.amount.metric.unit.toLowerCase()}&nbsp;
                                            {ingredient.name}
                                            </h5>
                                        </ListGroup.Item>
                                    ))
                                    
                                }
                            </ListGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Ingredients