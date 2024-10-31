import { format } from 'date-fns';

type ProjectProps = {
  projects: {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    category: string;
    publishedAt: string | null;
    public: boolean;
    status: string;
    tags: string[];
  }[];
  removeProject: (index: number) => void;
};

function Projects({ projects, removeProject }: ProjectProps) {
  // Funksjon for å telle prosjekter per kategori
  const getProjectCountByCategory = () => {
    return projects.reduce((acc: { [key: string]: number }, project) => {
      const { category } = project;
      if (acc[category]) {
        acc[category] += 1;
      } else {
        acc[category] = 1;
      }
      return acc;
    }, {});
  };

  const projectCountByCategory = getProjectCountByCategory();

  return (
    <div className="project-list">
      <div className="card">
        <h2>Prosjekter</h2>
        {projects.length === 0 ? (
          <p>Ingen prosjekter</p>
        ) : (
          <>
            <ul>
              {projects.map((project, index) => (
                <li key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    Opprettet: {format(new Date(project.createdAt), 'dd.MM.yyyy')}
                  </p>
                  <p>Kategori: {project.category}</p>
                  <p>Status: {project.status}</p>
                  <p>Public: {project.public ? 'Yes' : 'No'}</p>
                  <p>
                    Publisert:{' '}
                    {project.publishedAt
                      ? format(new Date(project.publishedAt), 'dd.MM.yyyy')
                      : 'Ikke publisert'}
                  </p>
                  <p>Tags: {project.tags.join(', ')}</p>
                  <button onClick={() => removeProject(index)}>Fjern</button>
                </li>
              ))}
            </ul>
            <h3>Totalt per kategori:</h3>
            <ul>
              {Object.entries(projectCountByCategory).map(([category, count], index) => (
                <li key={index}>
                  {category}: {count} prosjekter
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
