import { useState } from 'react';
import { format } from 'date-fns';

type CreateProjectProps = {
  addProject: (project: {
    title: string;
    description: string;
    category: string;
    publishedAt: string | null;
    public: boolean;
    status: string;
    tags: string[];
  }) => void;
};

function CreateProject({ addProject }: CreateProjectProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [status, setStatus] = useState('draft');
  const [publicStatus, setPublicStatus] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Prosjekttittelen kan ikke være tom.');
      return;
    }

    const newProject = {
      title,
      description,
      category,
      publishedAt: status === 'published' && publishedAt ? format(new Date(publishedAt), 'yyyy-MM-dd') : null,
      public: publicStatus,
      status,
      tags,
    };

    addProject(newProject);

    setTitle('');
    setDescription('');
    setCategory('');
    setPublishedAt('');
    setStatus('draft');
    setPublicStatus(false);
    setTags([]);
    setTagInput('');
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <div className="create-project-card">
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
          <label htmlFor="projectCategory">Kategori:</label>
          <input
            type="text"
            id="projectCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Beskrivelse:</label>
          <textarea
            id="projectDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="draft">Utkast</option>
            <option value="published">Publisert</option>
          </select>
        </div>
        {status === 'published' && (
          <div>
            <label htmlFor="publishedAt">Publisert dato:</label>
            <input
              type="date"
              id="publishedAt"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </div>
        )}
        <div>
          <label>Offentlig:</label>
          <input
            type="checkbox"
            checked={publicStatus}
            onChange={(e) => setPublicStatus(e.target.checked)}
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Legg til en tag"
          />
          <button type="button" onClick={handleAddTag}>Legg til tag</button>
          <p>{tags.join(', ')}</p>
        </div>
        <button className="add-project-button" type="submit">
          Legg til nytt prosjekt
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
