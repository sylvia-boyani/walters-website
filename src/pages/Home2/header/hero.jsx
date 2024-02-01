import React from 'react'
import hero from '../../../assets/images/home.png'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiTwitterXFill} from 'react-icons/ri'

function Hero() {
  return (
    <section className='hero'>
      <div className='container flex'>
        <div className='left'>
          <div className='img'>
            <img src={hero} alt="" />
          </div>
        </div>

      <div className='right topMargin'>
        <h1>I AM A WRITER</h1>
        <div className='social-Icon'>
          <i><RiFacebookCircleFill /> </i>
          <i><RiInstagramFill /></i>
          <i><RiTwitterXFill /></i>
          {/* <i className='fab fa-facebook-f facebook'></i>
          <i className='fab fa-instagram instagram'></i>
          <i className='fab fa-twitter twitter'></i> */}
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Excepturi dolores nihil modi necessitatibus explicabo 
           dicta nobis veritatis odit odio distinctio. Ad dignissimos 
           quod beatae impedit nobis molestiae magnam laborum tempora?</p>
           <button className='primary-btn'>Contact Me</button>
      </div>
      </div>

    </section>
  )
}

export default Hero