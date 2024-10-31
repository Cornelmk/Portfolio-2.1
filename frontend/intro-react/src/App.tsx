import ContactForm from "./components/ContactForm";
import CreateProject from "./components/CreateProject";
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import StudentCard from "./components/StudentCard";
import useProjects from "./hooks/useProjects";


function App() {
 // const student = {
  const student = 'Cornelius Kjelsaas';
  const school = 'Høgskolen i Østfold'
  const degree = 'Informatikk';
  const points = 180;
  const email = 'cornelmk@hiof.no'
  /*const experiences = [
    'Erfaring 1',
    'Erfaring 2'
  ]*/
  
  const { projects, addProject, removeProject } = useProjects();

  return (
    <body>
      <h1 className="title">Portofolio Prosjekt</h1>
      <div className="container">
      <StudentCard student={student} school={school} degree={degree} points={points} email={email}  />
      <Experiences />
      <Projects projects={projects} removeProject={removeProject} />
      <CreateProject addProject={addProject} />
      <ContactForm />
      </div>
    </body>
  )
}

export default App