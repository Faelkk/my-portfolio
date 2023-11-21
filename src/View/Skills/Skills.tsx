import { skillsIcon } from "../../App/mocks/images";
import useStatusStore from "../../App/store/store";

const Skills = () => {
  const { setStatus, status } = useStatusStore();

  return (
    <section className="mt-20 flex justify-center" id="skills">
      <section className="flex flex-col items-center md:gap-10 md:flex-row w-[90%]">
        <div className="flex md:w-[50%]">
          <div className="flex items-center flex-col">
            <h2 className="font-bold text-4xl mb-10">Minhas skills</h2>

            <div className="flex justify-center items-center">
              <ul className="grid grid-cols-3 sm:grid-cols-5 gap-3 pb-8">
                {skillsIcon.map((skill) => (
                  <li key={skill.name}>
                    <img
                      onClick={() => setStatus(skill.name)}
                      src={skill.url}
                      alt={`${skill.name} icon`}
                      className="h-16 w:-16 2xl:h-20 2xl:w-20 cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="flex w-full min-h-[20rem] text-[1.1rem] items-center bg-[#eee] rounded-lg 2xl:text-[1.4rem] justify-center  md:w-[50%]">
          {status.isHovered ? (
            <div className="flex flex-col justify-center w-[80%]">
              <h2 className="text-xl capitalize mb-2  text-blue-900 font-bold">
                {
                  skillsIcon.find((skill) => skill.name === status.skillId)
                    ?.name
                }
              </h2>
              <p className="text-blue-800">
                {
                  skillsIcon.find((skill) => skill.name === status.skillId)
                    ?.description
                }
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center w-[50%]">
              <p className="text-base"></p>{" "}
            </div>
          )}
        </section>
      </section>
    </section>
  );
};

export default Skills;
