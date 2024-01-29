import { useIsVisibleItemOnScreen } from "../../App/hooks/useIsVisibleItemOnScreen";

import useStatusStore from "../../App/store/store";
import { cn } from "../../App/utils/cn";
import Container from "../Components/Container/Container";
import Loading from "../Components/Loading/Loading";
import { useSkillsController } from "./useSkills";

const Skills = () => {
  const { setStatus, status } = useStatusStore();

  const { handleIconClick, shouldAnimate, skills, isLoading } =
    useSkillsController({
      setStatus,
      status,
    });

  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

  if (isLoading)
    return (
      <div className="my-8">
        {" "}
        <Loading isLoading={isLoading} />{" "}
      </div>
    );

  if (skills && !isLoading)
    return (
      <Container className="mt-20" id="skills">
        <section
          className={cn(
            "flex flex-col items-center md:gap-10 md:flex-row w-[90%]",
            isVisible ? "animate-slideMinimumDown" : ""
          )}
          ref={elementRef}
        >
          <article className="flex md:w-[50%]">
            <div className="flex items-center flex-col">
              <h2 className="font-bold text-4xl mb-10">Minhas habilidades</h2>

              <div className="flex justify-center items-center">
                <section className="grid grid-cols-3 sm:grid-cols-5 gap-3 pb-8">
                  {skills.map((skill) => (
                    <figure key={skill.name}>
                      <img
                        onClick={() => handleIconClick(skill.name)}
                        src={skill.url}
                        alt={`${skill.name} icon`}
                        className="h-16 w:-16 2xl:h-20 2xl:w-20 cursor-pointer hover:scale-110 transition"
                        aria-label={`${skill.name} icon`}
                      />
                    </figure>
                  ))}
                </section>
              </div>
            </div>
          </article>

          <section className="flex w-full min-h-[20rem] text-[1.1rem] items-center bg-[#eee] rounded-lg 2xl:text-[1.4rem] justify-center  md:w-[50%]">
            {status.isHovered ? (
              <div
                className={cn(
                  "flex flex-col justify-center w-[80%] ",
                  shouldAnimate ? "animate-startSlideLeft" : ""
                )}
              >
                <h2 className="text-xl capitalize mb-2  text-blue-900 font-bold">
                  {skills.find((skill) => skill.name === status.skillId)?.name}
                </h2>
                <p className="text-blue-800 text-sm">
                  {
                    skills.find((skill) => skill.name === status.skillId)
                      ?.description
                  }
                </p>
              </div>
            ) : (
              <div className="flex justify-center items-center ">
                <p className="text-sm xl:text-base">
                  Clique em algum ícone para ver mais informações
                </p>{" "}
              </div>
            )}
          </section>
        </section>
      </Container>
    );
};

export default Skills;
