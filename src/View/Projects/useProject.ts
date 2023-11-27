import { useState } from "react";

interface Project {
  name: string;
  url: string;
  description: string;
  cardImage: string;
  defaultImage: string;
  technologies: Technologies[];
}

interface Technologies {
  name: string;
  url: string;
}

const useProject = (handleOpenModal: () => void) => {
  const [projectModal, setProjectModal] = useState<Project | null>(null);

  const handleClickProject = (project: Project | null) => {
    setProjectModal(project);
    handleOpenModal();
  };

  return { projectModal, handleClickProject };
};

export default useProject;
