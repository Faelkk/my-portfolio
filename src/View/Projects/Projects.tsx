import Modal from "../Components/modal/Modal";
import useModal from "../Components/modal/useModal";
import homeImage from "../../assets/Coding-bro.svg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <section
        className="flex  justify-center items-center mt-6 "
        id="projects"
      >
        <section className="flex flex-col items-center w-full">
          <h2 className="font-bold text-4xl mb-10">Meus projetos</h2>

          <section className="flex flex-wrap justify-center gap-3 ">
            <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
              <h3 className="text-xl font-bold">fincheck</h3>
              <button
                className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold"
                onClick={handleOpenModal}
              >
                Ver mais
              </button>
            </div>

            <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
              <h3 className="text-xl font-bold">fincheck</h3>
              <button
                className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold"
                onClick={handleOpenModal}
              >
                Ver mais
              </button>
            </div>

            <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
              <h3 className="text-xl font-bold">fincheck</h3>
              <button
                className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold"
                onClick={handleOpenModal}
              >
                Ver mais
              </button>
            </div>
          </section>
        </section>
      </section>

      <Modal
        onClose={handleCloseModal}
        open={isVisibleModal}
        classNameOverlay="backdrop-blur-sm"
        classNameContent="flex  w-[80%] h-[80%] overflow-scroll md:overflow-hidden  flex-col md:flex-row items-center md:max-w-[1100px] md:w-[90%] md:h-auto fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
      >
        <section className="flex h-full flex-col items-center justify-center">
          <section className="h-96 w-60 ">
            <img src={homeImage} className="w-full h-full" />
          </section>
          <h2 className=" mt-2 r text-2xl font-bold text-blue-800">Fincheck</h2>
          <button className="mt-2 rounded-lg bg-blue-600 p-2 w-[80%] text-slate-100  text-xl font-bold ">
            Deploy
          </button>
        </section>

        <section className="flex flex-col max-w-[900px] ">
          <figure className="w-full">
            <img src={homeImage} className="h-[384px] w-full" />
          </figure>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            unde, at commodi nihil illum nesciunt incidunt assumenda earum quos,
            dolores officia rem delectus perspiciatis necessitatibus nemo
            cupiditate optio, blanditiis quibusdam!
          </p>

          <section className="flex gap-2 mt-2">
            <GitHubLogoIcon className="h-6 w-6" />{" "}
            <LinkedInLogoIcon className="h-6 w-6" />{" "}
            <GitHubLogoIcon className="h-6 w-6" />
          </section>
        </section>
      </Modal>
    </>
  );
};

export default Projects;
