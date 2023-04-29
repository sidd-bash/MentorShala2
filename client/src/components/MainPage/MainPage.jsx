import React from 'react'
import './MainPage.css'
import Contact from './Contact'
import Card from './Card'
export default function MainPage() {
  return (
    <div className='mainPage'>
      <div className='chatSec'>
        <div className='mode'>
          <button className='chatButton'>Chats</button>
          <button className='matchButton'>Matches</button>  
        </div>
        <div className='chats'>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </div>
      </div>
      <div className='swipeSec'>
        <div className="cards">
          <Card/>
        </div>
      </div>
    </div>
  )
}
