import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dash from './pages/Dash';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import { MainContextProvider } from './context/MainContext';
import AuthComponent from './services/AuthComponent';

import './App.css';

const App = () => {
  return (
    <MainContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <AuthComponent>
              <Route path="/dash" component={Dash} />
            </AuthComponent>
          </Switch>
        </Router>
      </div>
    </MainContextProvider>
  );
};

export default App;
