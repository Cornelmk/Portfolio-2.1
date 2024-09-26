import { useEffect, useState } from "react";
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm";
import CreateProject from "./components/CreateProject";
import Experiences from "./components/Experiences"
import Header from "./components/Header"
import Projects from "./components/Projects"


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
  const [projects, setProjects] = useState<{ id: number, title: string, description: string, createdAt: string, category: string  }[]>([
    {id: 1, title: 'Prosjekt 1', description: "", createdAt: "", category: 'App'},
    {id: 2, title: 'Prosjekt 2', description: "", createdAt: "", category: 'Nettside'},
    {id: 3, title: 'Prosjekt 3', description: "", createdAt: "", category: 'Nettside'},
    {id: 4, title: 'Prosjekt 4', description: "", createdAt: "",  category: 'Nettside'}
  ]);

  const addProject = ( title: string, category: string ) => {
    const newProject = { title, category};
    setProjects([...projects, newProject]);
  };

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);


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