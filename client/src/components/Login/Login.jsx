import React from 'react'
import './Login.css'
// import logo from "../../images/logo.png"
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target[0].value,e.target[1].value);
    navigate('/main')
    console.log('login')}
  return (
    <div className='login'>
      <div className='loginFrame'>
        <div className='loginImage'>
          <BsFillPersonFill style={{width:'6vw',height:'6vw'}}/>
        </div>
        <div className='loginForm'>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}
