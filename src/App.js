import './App.css';
import Search from './Search';
import CastMembers from './CastMembers';
import Cast from './Cast';
import Starting from './StartingPage'
import SignUp from './SignUp';
import LogIn from './LogIn';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
    
    <Router>
    <Switch>
    <Route path='/' exact component={Starting} />
    <Route path='/SignUp' exact component={SignUp} />
    <Route path='/LogIn' exact component={LogIn} />
    <Route path='/Search/:text' exact component={Search} />
    <Route path='/CastMembers/:id' component={CastMembers} />
    <Route path='/Cast/:id' component={Cast} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
