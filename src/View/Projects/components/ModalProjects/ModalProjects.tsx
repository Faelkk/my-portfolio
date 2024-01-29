import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Modal from "../../../Components/Modal/Modal";
import ImageDefaultModal from "../ImageDefaultModal/ImageDefaultModal";
import { Project } from "../../../../App/entities/Project";

interface ModalProjectsProps {
  projectModal: Project | null;
  onCloseModal: () => void;
  isVisibleModal: boolean;
}

const ModalProjects = ({
  projectModal,
  onCloseModal,
  isVisibleModal,
}: ModalProjectsProps) => {
  if (projectModal) {
    console.log(projectModal);

    return (
      projectModal && (
        <Modal
          onClose={onCloseModal}
          open={isVisibleModal}
          classNameOverlay="backdrop-blur-sm  data-[state=open]:animate-overlayShow"
          classNameContent="bg-slate-100 flex w-[80%] small:w-[50%]  md:w-[90%] h-[85%]  overflow-auto md:overflow-hidden  flex-col md:flex-row items-center md:max-w-[1100px]  md:h-auto fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none   data-[state=open]:animate-contentShow"
        >
          <section className="flex items-stretch  gap-4 flex-col md:flex-row  ">
            <section className="flex p-5 rounded-md  flex-col items-center justify-center bg-[#e2e8f0] md:pb-3 md:px-0 ">
              <section className="w-full md:h-96 md:w-60 flex  justify-center ">
                <img
                  src={projectModal.cardimage}
                  className=" h-[84px] w-[70%] md:h-full object-contain "
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
                target="_blank"
                href={projectModal.url}
              >
                <figure className="h-full w-full rounded-lg transition-all ease-in ">
                  <ImageDefaultModal
                    className="max-w-full opacity-0 transition duration-200 w-full  h-[330px] rounded-sm  object-cover r "
                    src={projectModal.defaultimage}
                    alt={projectModal.name!}
                  />
                </figure>
              </a>

              <div className="bg-[#e2e8f0]  my-3 md:my-0 flex flex-col gap-6  p-3 ">
                <p className="text-sm px-3 mt-3 md:h-35 flex h-full w-full    ">
                  {projectModal?.description}
                </p>

                <section className="flex gap-2 relative">
                  <section className="flex gap-2">
                    {projectModal?.technologies &&
                      projectModal.technologies.map((technology) => {
                        return (
                          <img
                            key={technology.url}
                            src={technology.url}
                            className="h-8 w-8 hover:scale-110 transition"
                          />
                        );
                      })}
                  </section>

                  <button className="absolute right-0 ">
                    <a href={projectModal.urlGithub} target="_blank">
                      <GitHubLogoIcon className="w-8 h-8" />
                    </a>
                  </button>
                </section>
              </div>
            </section>
          </section>
        </Modal>
      )
    );
  }
};

export default ModalProjects;
