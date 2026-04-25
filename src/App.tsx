import { About } from './components/About'
// import { AIBackground } from './components/AIBackground'
import { Challenges } from './components/Challenges'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { CurrentWork } from './components/CurrentWork'
import { Footer } from './components/Footer'
import { GithubActivity } from './components/GithubActivity'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Navbar } from './components/Navbar'
// import { PageReveal } from './components/PageReveal'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-app-bg text-text relative">
      {/* <AIBackground /> */}
      {/* <PageReveal /> */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <CurrentWork />
          <Challenges />
          <Skills />
          <Certifications />
          <GithubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
