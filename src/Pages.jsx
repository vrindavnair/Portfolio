import React from 'react'
import BasicExample from './components/navbar'
import Body from './components/Body'
import ContactAs from './components/ContactAs'
import Education from './components/Education'
import About from './components/about'
import Myprojects from './components/Myprojects'
import { Outlet } from 'react-router-dom'

function Pages() {
  return (
    <div>
      <BasicExample/>
      <Body/>
      <About/>
     <Education/>
      <Myprojects/>
      <ContactAs/>
      <div>
        
      </div>
    </div>
   
  )

}

export default Pages
