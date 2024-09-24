/*export default function Projects() {
    const project1 = { title: 'Project 1'};
    const project2 = { title: 'Project 2'};
    const project3 = { title: 'Project 3'};
    const project4 = { title: 'Project 4'};
  
    return (
      <div>
        <Project title={project1.title} />
        <Project title={project2.title} />
        <Project title={project3.title} />
        <Project title={project4.title} />
      </div>
    );
  }

  function Project({ title }: { title: string }) {
    return <p>{title}</p>;
  }
*/

type ProjectProps = {
  children: React.ReactNode;
};
  
function Project({ children }: ProjectProps) {
  return <div>{children}</div>;
}

export default function Projects() {
  const projects = [
    { title: "Prosject 1", description: "Nettside" },
    { title: "Prosject 2", description: "App" },
    { title: "Prosject 3", description: "Spill" },
    { title: "Prosject 4", description: "Nettside for NRK" }
  ];

  return (
    <div>
      <h2>Prosjekter</h2>
      {projects.map((project, index) => (
        <Project key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Project>
      ))}
    </div>
  );
}