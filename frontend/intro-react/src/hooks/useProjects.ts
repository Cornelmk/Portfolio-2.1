import { useEffect, useState } from "react";
import { Project, validateProject } from "../schemas/projectSchema";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const addProject = async (projectData: Omit<Project, 'id'>) => {
    const validationResult = validateProject(projectData);

    if (!validationResult.success) {
      console.error("Project validation failed:", validationResult.error);
      alert("Invalid project data: " + validationResult.error.errors.map(e => e.message).join(", "));
      return;
    }

    const newProject = {
      ...validationResult.data,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error('Failed to add project');
      }

      const createdProject = await response.json();
      setProjects((prevProjects) => [...prevProjects, { ...newProject, id: createdProject.id }]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const updateProject = async (id: number, projectData: Partial<Project>) => {
    const validationResult = validateProject(projectData);

    if (!validationResult.success) {
      console.error("Project validation failed:", validationResult.error);
      alert("Invalid project data: " + validationResult.error.errors.map(e => e.message).join(", "));
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validationResult.data),
      });

      if (!response.ok) {
        throw new Error('Failed to update project');
      }

      const updatedProject = await response.json();
      setProjects((prevProjects) => prevProjects.map(project => (project.id === id ? { ...project, ...updatedProject } : project)));
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const removeProject = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      setProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Error removing project:', error);
    }
  };

  const getProjectById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/projects/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch project');
      }
      const project = await response.json();
      return project;
    } catch (error) {
      console.error('Error fetching project by ID:', error);
    }
  };

  return {
    projects,
    addProject,
    updateProject,
    removeProject,
    getProjectById,
  };
};

export default useProjects;
