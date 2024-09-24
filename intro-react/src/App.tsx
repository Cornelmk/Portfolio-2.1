import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Header from "./components/Header"
import Projects from "./components/Projects"


//Må legge til experience som import i Student komponent, samt forsette på kurset React videre.
function App() {
 // const student = {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no'
  /*const experiences = [
    'Erfaring 1',
    'Erfaring 2'
  ]*/


  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={email} />
      <Projects />
    </div>
  )
}

export default App