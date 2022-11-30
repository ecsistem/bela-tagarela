import { useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './index.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  )
}
