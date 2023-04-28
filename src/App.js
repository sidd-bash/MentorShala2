import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/HomePage/Homepage'; 
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
import Admin from './components/Admin/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/mainpage" element={<MainPage/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
          
        
      </Router>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
