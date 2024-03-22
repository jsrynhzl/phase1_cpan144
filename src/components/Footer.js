import { Link } from 'react-router-dom';
import './Footer.css'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

const Footer = () => {
    return(
        <div>
            <footer>
                <Container fluid>
                    <Row className="bg-primary text-white p-4">
                        <Col></Col>
                        <Col>
                            <Nav className="flex-column fs-5">
                                Quick links
                                <NavLink href="/" className="text-white">Home</NavLink>
                                <NavLink href="/recipes" className="text-white">Recipes</NavLink>
                                <NavLink href="/subscribe" className="text-white">Subscribe</NavLink>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
            {/* <footer>
                <div class="footerpane">
                    <h3>Quick links</h3>
                    <nav id="footernav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/subscribe">Subscribe</Link></li>
                        </ul>
                    </nav>
                </div>
                <div class="footerpane">
                    <h3>Operating hours</h3>
                    <ul>
                        <li>Monday - Friday: 10am - 7pm</li>
                        <li>Saturday:&nbsp;10am - 5pm</li>
                        <li>Sunday:&nbsp;&nbsp;&nbsp;11am - 7pm</li>
                    </ul>
                </div>
                <p>Copyright &copy; TszWai and Jesse</p>
            </footer> */}
        </div>
    );
}

export default Footer