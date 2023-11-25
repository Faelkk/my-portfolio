import Modal from "../Components/Modal/Modal";
import useModal from "../Components/Modal/useModal";

import { projects } from "../../App/mocks/projects";
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

const Projects = () => {
  const [projectModal, setProjectModal] = useState<Project | null>(null);
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();

  const handleClickProject = (project: Project | null) => {
    setProjectModal(project);
    handleOpenModal();
  };

  return (
    <>
      <section
        className="flex  justify-center items-center mt-6 "
        id="projects"
      >
        <section className="flex flex-col items-center w-full">
          <h2 className="font-bold text-4xl mb-10">Meus projetos</h2>

          <section className="flex flex-wrap  max-w-[1000px] justify-center gap-4 ">
            {projects.map((project) => (
              <div
                className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48 bg-img"
                key={project.name}
                onClick={() => handleClickProject(project)}
              >
                <h3 className="text-xl font-bold">{project.name}</h3>

                <img src={project.cardImage} className="w-[124px] " />

                <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
                  Ver mais
                </button>
              </div>
            ))}
          </section>
        </section>
      </section>

      {projectModal && (
        <Modal
          onClose={handleCloseModal}
          open={isVisibleModal}
          classNameOverlay="backdrop-blur-sm"
          classNameContent="bg-slate-100 flex  w-[80%] h-[80%]  overflow-scroll md:overflow-hidden  flex-col md:flex-row items-center md:max-w-[1100px] md:w-[90%] md:h-auto fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <section className="flex h-full flex-col items-center justify-center bg-[#e2e8f0] p-3">
            <section className="h-[300px] w-full md:h-96 md:w-60 flex  justify-center ">
              <img
                src={projectModal.cardImage}
                className="w-[70%] h-full object-contain"
              />
            </section>
            <h2 className=" mt-2 r text-2xl font-bold text-blue-800">
              {projectModal?.name}
            </h2>
            <button className="mt-2 rounded-lg bg-blue-600 p-2 w-[80%] text-slate-100  text-xl font-bold ">
              Deploy
            </button>
          </section>

          <section className="flex   mt-6 flex-col max-w-[900px] ml-3 lg:mt0 ">
            <a className="cursor-pointer ">
              <figure className="h-full max-h-[20rem] w-full rounded-lg transition-all ease-in md:h-[300px]  bg-zinc-900  ">
                <img
                  src={projectModal.defaultImage}
                  className=" w-full h-full  rounded-sm  object-cover object-left"
                />
              </figure>
            </a>
            <div className="bg-[#e2e8f0] p-3 flex flex-col gap-3 mt-2">
              <p className="text-sm mx-2 mt-3 md:h-35 flex h-full w-full    text-justify">
                {projectModal?.description}
              </p>

              <section className="flex gap-2 ">
                {projectModal?.technologies &&
                  projectModal.technologies.map((technology) => (
                    <img
                      key={technology.url}
                      src={technology.url}
                      className="h-8 w-8"
                    />
                  ))}
              </section>
            </div>
          </section>
        </Modal>
      )}
    </>
  );
};

export default Projects;
