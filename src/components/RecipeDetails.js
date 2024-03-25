import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Ingredients from './Ingredients';
import Procedure from './Procedure';

const RecipeDetails = () => {
    return(
        <Container>
            <Row>
                <Col lg={4}>
                    <Ingredients/>
                </Col>
                <Col lg= {8}>
                    <Procedure/>
                </Col>
            </Row>
        </Container>
    );
}

export default RecipeDetails