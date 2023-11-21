import TyppingEffect from "./components/TyppingEffect";
import homeImage from "../../assets/Coding-bro.svg";

const Home = () => {
  return (
    <main className="flex justify-center items-center mt-6" id="inicio">
      <div className="flex flex-col-reverse items-center w-full md:w-[90%] md:justify-between md:flex-row ">
        <div className="flex flex-col  md:w-[50%]">
          <div className="flex flex-col gap-3 w-full items-center  md:items-start">
            <span className="text-[1.2rem] md:text-4xl font-bold">
              Olá, eu sou o
            </span>
            <h2 className="text-3xl font-bold md:text-7xl">Rafael.</h2>

            <TyppingEffect text="Full Stack Developer" />

            <div className="mt-4">
              <button className="text-[1.2rem] bg-blue-600 text-fuchsia-50 rounded-[12px] p-3">
                Precisando de um Desenvolvedor?
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[80%] md:w-[50%] md:max-w-[50%] ">
          <img src={homeImage} className="" alt="Coding bro" />
        </div>
      </div>
    </main>
  );
};

export default Home;
