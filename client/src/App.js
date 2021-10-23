import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dash from './pages/Dash';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dash" component={Dash} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
