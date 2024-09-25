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

/*type ProjectProps = {
  children: React.ReactNode;
};
  
function Project({ children }: ProjectProps) {
  return <div>{children}</div>;
}*/

type ProjectProps = {
  projects: { title: string, category: string; }[];
  removeProject: (index: number) => void;
};

function Projects({ projects, removeProject }: ProjectProps) {
  const getProjectCountByCategory = () => {
    return projects.reduce((acc: { [key: string]: number }, project) => {
      const {category} = project;
      if (acc[category]) {
        acc[category] += 1;
      } else {
        acc[category] = 1;
      }
      return acc;
    }, {});
  };

    const ProjectCountByCategory = getProjectCountByCategory();

  return (
    <div>
      <h2>Prosjekter</h2>
      {projects.length === 0 ? (
        <p>Ingen prosjekter</p>
      ) : (
        <>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              {project.title}
              <button onClick={() => removeProject(index)}>Fjern</button>
            </li>
          ))}
          <h3>Totalt per kategori:</h3>
          <ul>
            {Object.entries(ProjectCountByCategory).map(([category, count], index) => (
              <li key={index}>
                {category}: {count} prosjekter
              </li>
            ))}
          </ul>
        </ul>
        </>
      )}
    </div>
  );
}

export default Projects;
