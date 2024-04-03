import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const Procedure = (props) => {
    let procedureArray = props.steps;

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Procedure</h3></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ListGroup as="ol" numbered>
                                {
                                    procedureArray.map(step => (
                                        <ListGroup.Item as="li" style={{ justifyContent: 'left' }}>
                                            {step}
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

export default Procedure