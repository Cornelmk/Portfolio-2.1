import { useState } from "react";
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm";
import CreateProject from "./components/CreateProject";
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
  const [projects, setProjects] = useState<{ title: string, category: string }[]>([
    { title: 'Prosjekt 1 ', category: 'App' },
    { title: 'Prosjekt 2 ', category: 'Nettside'},
    { title: 'Prosjekt 3 ', category: 'App'},
  ]);

  const addProject = ( title: string, category: string ) => {
    const newProject = { title, category};
    setProjects([...projects, newProject]);
  };

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Projects projects={projects} removeProject={removeProject} />
      <CreateProject addProject={addProject} />
      <Contact email={email} />
      <ContactForm />
    </div>
  )
}

export default App