import {useEffect,useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Dash from './components/dashboard';
import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/login'}><Login></Login></Route>
        <Route exact path={'/'}><Dash></Dash></Route>
        <Route exact path={'/register'}><Register></Register></Route>
      </Router>
        
    </div>
  );
}

export default App;
