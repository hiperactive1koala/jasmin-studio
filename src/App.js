import React from 'react'

import {Navbar, Home, About, Projects, Tariffs, Reviews, Studio, Contact} from './components'

const App = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Tariffs/>
        <Reviews/>
        <Studio/>
        <Contact/>
    </>
  )
}

export default App