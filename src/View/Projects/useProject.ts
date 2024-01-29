import { useState } from "react";
import { useProjects } from "../../App/hooks/useProjects";
import { Project } from "../../App/entities/Project";

const useProject = (handleOpenModal: () => void) => {
  const { projects, isLoading } = useProjects();

  const [projectModal, setProjectModal] = useState<Project | null>(null);

  const handleClickProject = (project: Project | null) => {
    setProjectModal(project);
    handleOpenModal();
  };

  return {
    projectModal,
    projects,
    isLoading,
    handleClickProject,
  };
};

export default useProject;
