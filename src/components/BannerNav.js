import { Link } from 'react-router-dom';

import './BannerNav.css'
import icon from './images/title-icon.png'

const BannerNav = () => {
    return(
        <div>
            <nav id="topnav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/subscribe">Subscribe</Link></li>
                </ul>
            </nav>
            <header>
                <h1>
                    <Link to="/">
                        Bare
                        <img src={icon} width="30" height="30"
                            alt="A logo for Bare Bakes, a minimalist square-sliced cake"/>
                        Bakes
                    </Link>
                </h1>
            </header>
        </div>
    );
}

export default BannerNav