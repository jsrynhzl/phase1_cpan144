import { useParams, useNavigate } from "react-router-dom"
import BannerNav from "../components/BannerNav";
import Footer from "../components/Footer";
import './Subscribe.css';
import Button from 'react-bootstrap/Button';

const SubscribeCompleted = () => {

    const navigate = useNavigate();
    const {name} = useParams();

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div>
            <BannerNav/>
            <div className="success">
            <h3>Subscribed successfully</h3>
            <h3>Welcome, {name} </h3>
            <br/>
            <Button variant="warning" onClick={goToHome}>Visit Home Page</Button>
            </div>
            <Footer/>
        </div>
    )
}
export default SubscribeCompleted;