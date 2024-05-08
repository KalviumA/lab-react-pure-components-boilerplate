import { PureComponent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounter from './Components/SimpleCounter'
import PureCounter from './Components/PureCounter'

function App() {

  return (
    <>
    <SimpleCounter/>
  
    <PureCounter/>
    </>
  )
}

export default App
