import { cn } from "../../../../App/utils/cn";

interface NavigationsHeaderProps {
  ClassNameUL?: string;
  classNameLI?: string;
  ClassNameNav?: string;
  onClickNavigate?: () => void;
}

const NavigationHeader = ({
  classNameLI,
  ClassNameUL,
  ClassNameNav,
  onClickNavigate,
}: NavigationsHeaderProps) => {
  return (
    <nav className={ClassNameNav}>
      <ul className={cn("list-none pl-0 ", ClassNameUL)}>
        <li className={classNameLI}>
          <a
            href="#inicio"
            className="hover:text-blue-300 transition-color"
            onClick={onClickNavigate}
          >
            Inicio
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#about"
            className="hover:text-blue-300 transition-color"
            onClick={onClickNavigate}
          >
            Sobre mim
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#skills"
            className="hover:text-blue-300 transition-color"
            onClick={onClickNavigate}
          >
            Skills
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#projects"
            className="hover:text-blue-300 transition-color"
            onClick={onClickNavigate}
          >
            Projetos
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#contact"
            className="hover:text-blue-300 transition-color"
            onClick={onClickNavigate}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
