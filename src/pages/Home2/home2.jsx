import React from 'react'
import Hero from './header/hero'
import Branding from './header/Branding'
import About from './header/About'
import Services from './header/Services'
import Wrapper from './header/Wrapper'
import './hero.css'

export const Home2 = () => {
    return (
      <>
       <Hero />
       <Branding />
       <About />
       <Services />
       <Wrapper />
      </>
    )
  }