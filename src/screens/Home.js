import BannerNav from '../components/BannerNav'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow';
import AmericanImg from '../components/CarouselImage/American.jpg';
import ChineseImg from '../components/CarouselImage/Chinese.jpg';
import FrenchImg from '../components/CarouselImage/French.jpg';
import ItalianImg from '../components/CarouselImage/Italian.jpg';
import JapaneseImg from '../components/CarouselImage/Japanese.jpg';
import MexicanImg from '../components/CarouselImage/Mexican.jpg';

const Home = () => {
    const images = [
        {
            url:  AmericanImg,
            label: 'American',
        },
        {
            url: ChineseImg,
            label: 'Chinese',
        },
        {
            url: FrenchImg,
            label: 'French',
        },
        {
            url: ItalianImg,
            label: 'Italian',
        },
        {
            url: JapaneseImg,
            label: 'Japanese',
        },
        {
            url: MexicanImg ,
            label: 'Mexican',
        }
    ];

    return (
        <div>
            <BannerNav />
            <h2 className='welcomeMessage'>
                Welcome to the sweet life at BareBakes!
            </h2>
            <Slideshow images = {images} />
            <Footer />
        </div>
    );
}

export default Home