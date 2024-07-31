import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Project from './components/project/Project';


export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Project />
        <Contact />
      </main>
      < Footer />
      <ScrollUp />
    </>
  )
}
