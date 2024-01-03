import TyppingEffect from "./components/TyppingEffect";
import homeImage from "../../assets/defaults/Coding-bro.svg";
import Container from "../Components/Container/Container";
import { cn } from "../../App/utils/cn";
import { useIsVisibleItemOnScreen } from "../../App/hooks/useIsVisibleItemOnScreen";

const Home = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

  return (
    <Container className="mt-6" id="inicio">
      <section className="flex flex-col-reverse items-center w-full md:w-[90%] md:justify-between md:flex-row  " ref={elementRef}>
        <main className={cn('flex flex-col  md:w-[50%] ', isVisible ? 'animate-startSlideLeft' : '' )}>
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
                <button className="text-[1.2rem] bg-blue-600 text-fuchsia-50 rounded-[12px] p-3 hover:bg-blue-500 transition-colors">
                  Precisando de um Desenvolvedor?
                </button>
              </a>
            </div>
          </section>
        </main>

        <figure className={cn(' w-[80%] minilg:h-[200px] minism:h-[330px] mini:h-[430px]  md:h-[450px] 2sm:h-[530px]   md:w-[50%] md:max-w-[50%] minimum:h-[550px]  medium:h-[680px] large:h-[864px]  ', isVisible ? 'animate-startSlideRight' : '')}>
          <img src={homeImage} className="h-full w-full" alt="Coding bro" />
        </figure>
      </section>
    </Container>
  );
};

export default Home;
