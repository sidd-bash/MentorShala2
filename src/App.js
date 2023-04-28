import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/HomePage/Homepage'; 
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
import Admin from './components/Admin/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/mainpage" component={MainPage}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
