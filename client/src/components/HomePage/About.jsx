import React from 'react'
import './About.css'
import SidImage from '../../images/sid.jpeg'
export default function About(props) {
  return (
    <div className='about'>
        <img src={SidImage} alt="" />
        <div className='name'>{props.founder.name}</div>
        <div className='role'>{props.founder.role}</div>
        <div className='desc'>{props.founder.desc}</div>
    </div>
  )
}
