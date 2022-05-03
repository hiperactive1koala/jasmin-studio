import React from 'react'

import {Navbar, Home, About, Projects, Tariffs, Reviews, Contact} from './components'

const App = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Tariffs/>
        <Reviews/>
        <Contact/>
    </>
  )
}

export default App