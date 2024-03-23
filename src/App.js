import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Subscribe from './screens/Subscribe';
import SubscribeCompleted from './screens/SubscribeCompleted';
import NotFound from './screens/NotFound';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="/subscribecompleted/:name" element={<SubscribeCompleted/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
