import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Portfolio from './Components/Portfolio/Portfolio'; // Import the Portfolio component


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Portfolio />} /> {/* Add route for Portfolio */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
