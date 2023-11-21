import { cn } from "../../../App/utils/cn";

interface NavigationsHeaderProps {
  ClassNameUL?: string;
  classNameLI?: string;
  ClassNameNav?: string;
}

const NavigationHeader = ({
  classNameLI,
  ClassNameUL,
  ClassNameNav,
}: NavigationsHeaderProps) => {
  return (
    <nav className={ClassNameNav}>
      <ul className={cn("list-none pl-0 ", ClassNameUL)}>
        <li className={classNameLI}>
          <a href="#/" className="hover:text-blue-300 transition-color">
            Inicio
          </a>
        </li>

        <li className={classNameLI}>
          <a href="#about" className="hover:text-blue-300 transition-color">
            Sobre mim
          </a>
        </li>

        <li className={classNameLI}>
          <a href="#/skills" className="hover:text-blue-300 transition-color">
            Skills
          </a>
        </li>

        <li className={classNameLI}>
          <a href="#projects" className="hover:text-blue-300 transition-color">
            Projetos
          </a>
        </li>

        <li className={classNameLI}>
          <a href="#contact" className="hover:text-blue-300 transition-color">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
