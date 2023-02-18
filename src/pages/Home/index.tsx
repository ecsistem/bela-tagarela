import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Additional } from '../../components/Additional'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'
import { Projects } from '../../components/Projects'
import { Collaborator } from '../../components/Collaborator'

export function Home() {
  return (
    <div className="Home">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Collaborator />
          <Additional />
          <Footer />
    </div>
  );
}
