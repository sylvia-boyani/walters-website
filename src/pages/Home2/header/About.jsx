import React from 'react'
import pic from '../../../assets/images/input.png'

export default function About() {
  const data = [
    {
      id: 1,
      title: "Who I am And What I Do",
      desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  return (
    <>
    <section className='about topMargin'>
    <div className='container flex'>
        {
          data.map((val) =>{
            return (
              <>
            <div className='left mtop'>
              <div className='heading'>
                <h3>About Me</h3>
                <h1>{val.title}</h1>
              </div>
              <p>{val.desc1}</p>
              <p>{val.desc2}</p>
              <p>{val.desc3}</p> 
              <button className='primary-btn'>Read More</button>             
            </div>
            <div className='right'>
              <div className='img'>
                <img src={pic} alt='pic2' />
              </div>

            </div>
            </>
            )
          })
        }
    </div>
    </section>
    </>
  )
}
