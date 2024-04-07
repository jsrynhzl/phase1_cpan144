import './Footer.css'
import icon from './images/title-icon.png'
import { Link } from "react-router-dom"
import { Container, Row, Col, Image, Nav, NavLink } from "react-bootstrap"
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/youtube'
import 'react-social-icons/x'

const Footer = () => {
    return(
        <div>
            <footer className=" bg-light">
                <Container>
                    <Row className="p-4">
                        <Col>
                            <span>
                                <h4>BARE <Image src={icon} alt="A logo of Bare Bakes" width="30" height="30" rounded /> BAKES</h4>
                            </span>
                            <br/>
                            <p>Copyright &copy; Tsz Wai Cheung & Jesseryn Coronado</p>
                            <p>N01603365 / N01584373</p>
                        </Col>
                        <Col>
                            <h5>Quick links</h5>
                            <Nav className="flex-column">
                                <Link to="/">Home</Link>
                                <Link to="/recipes">Recipes</Link>
                                <Link to="/subscribe">Subscribe</Link>
                            </Nav>
                        </Col>
                        <Col>
                            <h5>Follow us</h5>
                            <SocialIcon url="https://instagram.com" />
                            <SocialIcon url="https://youtube.com" />
                            <SocialIcon url="https://x.com" />
                            <br /><br />
                            <p>CPAN 144 - Section 8288 / 0NA</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer