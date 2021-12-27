import './App.css';
import Search from './Search';
import CastName from './CastName';
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
    <Route path='/CastName/:id' component={CastName} />
    <Route path='/Cast/:id' component={Cast} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
