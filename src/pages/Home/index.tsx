import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Additional } from '../../components/Additional'
import { Hero } from '../../components/Hero'
import './index.css'

export function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Additional/>
      <Footer/>
    </div>
  )
}
