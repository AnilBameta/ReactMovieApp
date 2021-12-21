import './App.css';
import Search from './Search';
import Popup from './Popup';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' component={Search} />
    <Route path='/Popup/:id' component={Popup} />
    </Switch>
    </Router>
  );
}

export default App;
