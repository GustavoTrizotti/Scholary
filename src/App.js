import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterStudent from './RegisterStudent';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<RegisterStudent />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
