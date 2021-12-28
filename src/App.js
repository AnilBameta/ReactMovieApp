import './App.css';
import Search from './Search';
<<<<<<< HEAD
import Popup from './Popup';
=======
import CastMembers from './CastMembers';
>>>>>>> bf95a418a09b8a7eab68abf59ba7521fa3c07910
import Cast from './Cast';
import Starting from './StartingPage'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Router>
    <Switch>
    <Route path='/' exact component={Starting} />
    <Route path='/Search/:text' exact component={Search} />
<<<<<<< HEAD
    <Route path='/Popup/:id' component={Popup} />
=======
    <Route path='/CastMembers/:id' component={CastMembers} />
>>>>>>> bf95a418a09b8a7eab68abf59ba7521fa3c07910
    <Route path='/Cast/:id' component={Cast} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
