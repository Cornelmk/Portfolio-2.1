import { useState } from 'react';

type CreateProjectProps = {
  addProject: (project: { title: string, category: string }) => void;
};

function CreateProject({ addProject }: CreateProjectProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Prosjekttittelen kan ikke være tom.');
      return;
    }

    addProject( title, category );

    setTitle('');
    setCategory('');
  };

  return (
    <div>
      <h2>Opprett nytt prosjekt</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectTitle">Prosjekttittel:</label>
          <input
            type="text"
            id="projectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
            <label htmlFor='projectCategory'>Kategori:</label>
            <input
              type='text'
              id='projectCategory'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              />
        </div>
        <button type="submit">Legg til prosjekt</button>
      </form>
    </div>
  );
}

export default CreateProject;