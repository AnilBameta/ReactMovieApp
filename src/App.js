import './App.css';
import Search from './Search';
import CastMembers from './CastMembers';
import Cast from './Cast';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' exact component={Search} />
    <Route path='/CastMembers/:id' exact component={CastMembers} />
     <Route path='/Cast/:id' component={Cast} />
    </Switch>
    </Router>
  );
}

export default App;
