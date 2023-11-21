import { skillsIcon } from "../../App/mocks/images";

const Skills = () => {
  return (
    <section className="mt-20 flex justify-center" id="skills">
      <section className="flex flex-col items-center md:gap-10  md:flex-row w-[90%]">
        <div className="flex  md:w-[50%]">
          <div className="flex items-center flex-col">
            <h2 className="font-bold text-4xl mb-10">Minhas skills</h2>

            <div className="flex justify-center items-center">
              <ul className="grid grid-cols-3   sm:grid-cols-5 gap-3 pb-8">
                {skillsIcon.map((skill) => (
                  <img
                    src={skill.url}
                    alt={`${skill.name} icon`}
                    key={skill.name}
                    className="h-16 w:-16 2xl:h-20 2xl:w-20"
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="flex w-full min-h-[20rem] text-[1.1rem] items-center bg-[#eee] rounded-lg 2xl:text-[1.4rem]  justify-center text-center  md:w-[50%] ">
          <h2>Passe o mouse sobre o icone para ver mais informações</h2>
        </section>
      </section>
    </section>
  );
};

export default Skills;
