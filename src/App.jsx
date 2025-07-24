import React from 'react'
import Hero from './components/Hero'
import Art from './components/Art'
import Navbar from './components/Navbar'
import About from './components/About'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <section className='h-[150px]'/>
      <About/>
      <Art/>
      {/* <Story/> */}
      <Contact/>
      <Footer/>
      
    </main>
    
  )
}

export default App