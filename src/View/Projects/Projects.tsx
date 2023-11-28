import useModal from "../Components/Modal/useModal";

import { projects } from "../../App/mocks/projects";

import useProject from "./useProject";
import ModalProjects from "./components/ModalProjects/ModalProjects";

const Projects = () => {
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();
  const { projectModal, handleClickProject } = useProject(handleOpenModal);

  return (
    <>
      <section
        className="flex  justify-center items-center mt-6 "
        id="projects"
      >
        <section className="flex flex-col items-center w-full">
          <h2 className="font-bold text-4xl mb-10">Meus projetos</h2>

          <section className="grid grid-cols-1 mini:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4  3xl:grid-flow-col justify-center gap-4 ">
            {projects.map((project) => (
              <section
                className="bg-blue-700 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48 bg-img hover:scale-105 transition"
                key={project.name}
                onClick={() => handleClickProject(project)}
              >
                <h3 className="text-xl font-bold text-slate-50">
                  {project.name}
                </h3>

                <img
                  src={project.cardImage}
                  className="w-[100px]  pointer-events-none select-none"
                />

                <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
                  Ver mais
                </button>
              </section>
            ))}
          </section>
        </section>
      </section>

      <ModalProjects
        projectModal={projectModal}
        onCloseModal={handleCloseModal}
        isVisibleModal={isVisibleModal}
      />
    </>
  );
};

export default Projects;
