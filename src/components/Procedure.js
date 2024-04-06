import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Procedure = (props) => {
    let procedureArray = props.steps;
    let equipmentPhoto = props.photo;

    const renderTooltip = (
        <Tooltip style={{ width: '400px' }}>
            <Image src={equipmentPhoto} width="400" length="400" rounded />
        </Tooltip>
    );

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Procedure</h3></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <OverlayTrigger
                                placement="left-end"
                                overlay={renderTooltip}>
                                <ListGroup as="ol" numbered>
                                    {
                                        procedureArray.map(step => (
                                            <ListGroup.Item as="li" style={{ justifyContent: 'left' }}>
                                                {step}
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            </OverlayTrigger>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Procedure