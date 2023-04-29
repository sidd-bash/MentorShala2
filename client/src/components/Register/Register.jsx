import React from 'react'
import '../Login/Login.css'
import {Link} from 'react-router-dom'
// import logo from "../../images/logo.png"
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target[0].value,e.target[1].value);
    try{
      fetch('https://mentorspace.onrender.com/register', {
      method: 'POST',
      crossDomain:true,
      headers: {
        'Content-Type': 'application/json',
        Accept:"application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          uname: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value
        })
      }).then((res)=>res.json()).then((data)=> {
          console.log(data,"userRegister")
        })
    }
    catch(err){
      console.log(err);
    }
    
    // navigate('/main')
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
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button>Register</button>
            </form>
      
          </div>
          <div>Already have an account? <Link to = '/register'> Login</Link></div>
        </div>
      </div>
    
  )
}
