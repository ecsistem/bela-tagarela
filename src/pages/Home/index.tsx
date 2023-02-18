import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Additional } from '../../components/Additional'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'

export function Home() {
  return (
    <div className="App">
          <Header />
          <Hero />
          <About />
          <Additional />
          <Footer />
    </div>
  );
}
