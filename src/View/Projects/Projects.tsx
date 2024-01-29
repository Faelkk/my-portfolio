import useProject from "./useProject";
import ModalProjects from "./components/ModalProjects/ModalProjects";
import Container from "../Components/Container/Container";
import useModal from "../Components/Modal/useModal";
import { useIsVisibleItemOnScreen } from "../../App/hooks/useIsVisibleItemOnScreen";
import { cn } from "../../App/utils/cn";
import Loading from "../Components/Loading/Loading";

const Projects = () => {
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();
  const { projectModal, projects, isLoading, handleClickProject } =
    useProject(handleOpenModal);
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

  if (isLoading)
    return (
      <div className="my-8">
        {" "}
        <Loading isLoading={isLoading} />{" "}
      </div>
    );

  if (projects && !isLoading) {
    return (
      <Container className="mt-6" id="projects">
        <section
          className={cn(
            "flex flex-col items-center w-full",
            isVisible ? "animate-slideSideLeftAndFade" : ""
          )}
          ref={elementRef}
        >
          <h2 className="font-bold text-4xl mb-10">Meus projetos</h2>

          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-[90%] gap-3">
              {projects.map((project) => (
                <article
                  className="bg-blue-700 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6   cursor-pointer md:h-80 md:w-48 bg-img hover:scale-105 transition-transform"
                  key={project.name}
                  onClick={() => handleClickProject(project)}
                >
                  <h3 className="text-xl font-bold text-slate-50">
                    {project.name}
                  </h3>

                  <img
                    src={project.cardimage}
                    className="w-[100px]  pointer-events-none select-none"
                    alt={`${project.name} project`}
                  />

                  <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
                    Ver mais
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModalProjects
          projectModal={projectModal}
          onCloseModal={handleCloseModal}
          isVisibleModal={isVisibleModal}
        />
      </Container>
    );
  }
};

export default Projects;
