import React,{useState} from 'react'
import './Homepage.css'
import logo from "../../images/logo.png"
import About from './About'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export default function Homepage() {
    const founders = [
        {
            name: 'Siddharth',
            role: 'Full Stack Developer',
            desc: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        },
        {
            name: 'Anant',
            role: 'Full Stack Developer',
            desc: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        },
        {
            name: 'Abhishek',
            role: 'Full Stack Developer',
            desc: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        },
        {
            name: 'Saurabh',
            role: 'Full Stack Developer',
            desc: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        },
        {
            name: 'Abhay',
            role: 'Full Stack Developer',
            desc: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        }
    ]
    let [founderNumber,setFounderNumber] = useState(0);
  return (
    <div className='homepage'>
        <div className='section1'>
        
                <img className='logo' src={logo} alt="logo" />
           
            <div className='buttons'>
                <button>Admin</button>
                <button>Login</button>
            </div>
            
        </div>
        
        <div className='section2'>
            <h1>Swipe on and study</h1>
            <div className='homepageimage'>
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt='home page'/>
            </div>
            
        </div>

        <div className='section3'>
            <h2>Services we offer:</h2>
            <div className='section3__cards'>
                <div className='section3__card'>
                    <img src="https://img.freepik.com/premium-photo/small-brown-kitten_146346-1066.jpg?w=2000" alt="" />
                    <div>
                        <h3>Chat Section</h3>
                        <p>MentorShala provides chat facility to users to message or chat with mentors or mentees. If you are matched with mentors or mentees by card swipe than, you can chat or message them with the chat facility. You can send photos, videos, gif and stickers to the receiver to interact more with them.</p>
                    </div>
                </div>
                <div className='section3__card'>
                    
                    <div>
                        <h3>Card Swiping</h3>
                        <p>Choose your mentor or mentee by swiping their card.If you like the person, you can swipe right, otherwise swipe left.That card will conatin person's details like name, state, country, education and experience. This details will help you in choosing your mentor or mentee. If any peroson card offended you, then you can report that person.</p>
                    </div>
                    <img src="https://img.freepik.com/premium-photo/small-brown-kitten_146346-1066.jpg?w=2000" alt="" />
                </div>
                <div className='section3__card'>
                    <img src="https://img.freepik.com/premium-photo/small-brown-kitten_146346-1066.jpg?w=2000" alt="" />
                    <div>
                        <h3>Community</h3>
                        <p>MentorShala provides chat facility to users to message or chat with mentors or mentees. If you are matched with mentors or mentees by card swipe than, you can chat or message them with the chat facility. You can send photos, videos, gif and stickers to the receiver to interact more with them.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='section4'>
            <div className='sectionHeading'>
                About Us
            </div>
            <div className='aboutCard'>
                <button onClick={()=>{setFounderNumber((founderNumber-1)%5)}}><BsFillArrowLeftCircleFill style={{width:"5vh",height:"5vh"}}/></button>
                <About founder={founders[0]}/>
                <button><BsFillArrowRightCircleFill style={{width:"5vh",height:"5vh"}}/></button>  
            </div>
            
        </div>
        <div className='section5'>
            <div className='sectionHeading'>
                Contact Us
            </div>
            <div className='contactDetails'>
                <div className='contactButtons'>
                    
                    <button><img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=626&ext=jpg" alt="" /></button>
                    <button><img src="https://img.freepik.com/free-icon/twitter_318-566762.jpg?size=626&ext=jpg" alt="" /></button>
                    <button>LinkedIn</button>
                </div>
                <div className='contactForm'>
                    <form onSubmit>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            
        </div>
        <div>Footer</div>
    </div>
  )
}
