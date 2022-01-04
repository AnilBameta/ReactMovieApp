import './App.css';
import Search from './Search';
import CastMembers from './CastMembers';
import Cast from './Cast';
import Starting from './StartingPage'
import SignUp from './SignUp';
import LogIn from './LogIn';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
    
    <Router>
    <Routes>
    <Route path='/' exact element={<Starting/>} />
    <Route path='/SignUp' exact element={<SignUp/>} />
    <Route path='/LogIn' exact element={<LogIn/>} />
    <Route path='/Search/:txt' exact element={<Search/>} />
    <Route path='/CastMembers/:id' element={<CastMembers/>} />
    <Route path='/Cast/:id' element={<Cast/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
