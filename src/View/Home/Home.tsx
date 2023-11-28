import TyppingEffect from "./components/TyppingEffect";
import homeImage from "../../assets/defaults/Coding-bro.svg";
import Container from "../Components/Container/Container";

const Home = () => {
  return (
    <Container className="mt-6" id="inicio">
      <section className="flex flex-col-reverse items-center w-full md:w-[90%] md:justify-between md:flex-row ">
        <main className="flex flex-col  md:w-[50%]">
          <section className="flex flex-col gap-3 w-full items-center  md:items-start">
            <span className="text-[1.2rem] md:text-4xl font-bold">
              Olá, eu sou o
            </span>
            <h2 className="text-3xl font-bold md:text-7xl">
              <a
                href="https://github.com/Faelkk"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Rafael.
              </a>
            </h2>

            <TyppingEffect text="Full Stack Developer" />

            <div className="mt-4">
              <a href="#contact">
                <button className="text-[1.2rem] bg-blue-600 text-fuchsia-50 rounded-[12px] p-3">
                  Precisando de um Desenvolvedor?
                </button>
              </a>
            </div>
          </section>
        </main>

        <figure className=" w-[80%] md:w-[50%] md:max-w-[50%] ">
          <img src={homeImage} className="" alt="Coding bro" />
        </figure>
      </section>
    </Container>
  );
};

export default Home;
