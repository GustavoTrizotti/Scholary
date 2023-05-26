import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterStudent from './RegisterStudent';
import StudentDetails from './StudentDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<RegisterStudent />}/>
            <Route path='/students/:id' element={<StudentDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
