import Modal from "../Components/Modal/Modal";
import useModal from "../Components/Modal/useModal";
import ImageDefaultModal from "./ImageDefaultModal/ImageDefaultModal";

import { projects } from "../../App/mocks/projects";

import useProject from "./useProject";

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
              <div
                className="bg-blue-700 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48 bg-img"
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
              </div>
            ))}
          </section>
        </section>
      </section>

      {projectModal && (
        <Modal
          onClose={handleCloseModal}
          open={isVisibleModal}
          classNameOverlay="backdrop-blur-sm  data-[state=open]:animate-overlayShow"
          classNameContent="bg-slate-100 flex  w-[90%] h-[90%]  overflow-auto md:overflow-hidden  flex-col md:flex-row items-center md:max-w-[1100px] md:w-[90%] md:h-auto fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none     "
        >
          <section className="flex items-strech h-[100%] max-h-[500px] gap-4 flex-col md:flex-row  ">
            <section className="flex p-5 rounded-md md:h-full flex-col items-center justify-center bg-[#e2e8f0] md:pb-3 md:px-0 md:pt-0 ">
              <section className="w-full md:h-96 md:w-60 flex  justify-center ">
                <img
                  src={projectModal.cardImage}
                  className=" h-[84px] w-[70%] md:h-full object-contain"
                />
              </section>

              <h2 className=" mt-2 r text-2xl font-bold text-blue-800">
                {projectModal?.name}
              </h2>

              <a
                href={projectModal.url}
                className="w-full flex justify-center"
                target="_blank"
              >
                <button className="mt-2 rounded-lg bg-blue-600 p-2 w-[80%] text-slate-100  text-xl font-bold ">
                  Deploy
                </button>
              </a>
            </section>

            <section className="flex gap-2   flex-col max-w-[900px]  md:mt-0 justify-between ">
              <a
                className="cursor-pointer "
                href={projectModal.url}
                target="_blank"
              >
                <figure className="h-full  w-full rounded-lg transition-all ease-in   ">
                  <ImageDefaultModal
                    className="max-w-full opacity-0 transition duration-200 w-full  max-h-[18.75rem] rounded-sm object-cover object-left"
                    src={projectModal.defaultImage}
                    alt={projectModal.name}
                  />
                </figure>
              </a>

              <div className="bg-[#e2e8f0]  my-3 md:my-0 flex flex-col gap-3  p-3 ">
                <p className="text-sm px-3 mt-3 md:h-35 flex h-full w-full    ">
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
          </section>
        </Modal>
      )}
    </>
  );
};

export default Projects;
