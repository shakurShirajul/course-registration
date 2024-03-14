// import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Headers from './components/Header/Headers'

function App() {

  return (
    <>
      <Headers></Headers>
      <div className='container mx-auto flex'>
        <Cards></Cards>
        <Cart></Cart>
      </div>

    </>
  )
}

export default App
