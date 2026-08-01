import Header from './components/Header'
import Section from './components/Section'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import './App.css'

function App() {
  return (
    <main className="resume">
      <Header />

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Projects">
        <Projects />
      </Section>

      <Section title="Skills">
        <Skills />
      </Section>

      <Section title="Education">
        <Education />
      </Section>
    </main>
  )
}

export default App
