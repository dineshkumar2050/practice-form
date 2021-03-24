import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home';
import WelcomeUser from './WelcomeUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/welcome-user' component={WelcomeUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
