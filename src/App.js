import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import Subscribe from './screens/Subscribe';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
