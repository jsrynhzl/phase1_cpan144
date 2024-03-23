import { useParams, useNavigate } from "react-router-dom"
import BannerNav from "../components/BannerNav";
import Footer from "../components/Footer";

const SubscribeCompleted = () => {

    const navigate = useNavigate();
    const {name} = useParams();

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div>
            <BannerNav/>
            <p class="success">Subscribe Successfully</p>
            <p class="success">Welcome, {name} </p>
            <button onClick={goToHome}>Visit Home Page</button>
            <Footer/>
        </div>
    )
}
export default SubscribeCompleted;