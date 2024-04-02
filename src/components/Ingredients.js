import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Ingredients = (props) => {
    let ingredientsArray = props.array
    let ingredientsWidget = props.widget

    const renderTooltip = (
        <Tooltip style={{ border: 'none', boxShadow: 'none' }}>
            <Image src={ingredientsWidget} width="400" length="400" rounded />
        </Tooltip>
    );

    return(
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Ingredients</h3></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <OverlayTrigger
                                placement="right-end"
                                overlay={renderTooltip}>
                                <ListGroup as="ul">
                                    {
                                        ingredientsArray.map(ingredient => (
                                            <ListGroup.Item as="li" >
                                                <h5>
                                                    {ingredient.amount.metric.value}&nbsp;
                                                    {ingredient.amount.metric.unit.toLowerCase()}&nbsp;
                                                    {ingredient.name}
                                                </h5>
                                            </ListGroup.Item>
                                        ))
                                        
                                    }
                                    {/* <Image src={ingredientsWidget} width="450" length="450" rounded /> */}
                                </ListGroup>
                            </OverlayTrigger>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Ingredients