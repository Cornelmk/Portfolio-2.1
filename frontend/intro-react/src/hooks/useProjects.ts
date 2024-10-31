import { useEffect, useState } from "react";
import { Project, validateProject } from "../schemas/projectSchema";
import { format } from 'date-fns';

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const addProject = (title: string, category: string, description: string, status: 'draft' | 'published', tags: string[]) => {
    const newProject = {
      title,
      category,
      description: "",
      createdAt: new Date().toISOString(),
      publishedAt: status === 'published' ? new Date().toISOString() : null,
      status,
      tags
    };

    const validationResult = validateProject(newProject);

    if (!validationResult.success) {
      console.error("Project validation failed:", validationResult.error);
      alert("Invalid project data: " + validationResult.error.errors.map(e => e.message).join(", "));
      return;
    }

    setProjects([...projects, validationResult.data]);
  };

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return {
    projects,
    addProject,
    removeProject
  };
};

export default useProjects;