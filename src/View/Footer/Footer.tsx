import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import logoIcon from "../../assets/icons/android-chrome-512x512_1.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center  ">
      <div className="flex justify-between w-[95%] border-t border-700  pt-6 pb-6 ">
        <a
          href="https://github.com/Faelkk"
          target="_blank"
          className=" flex items-center  gap-3  ml-4"
        >
          <div className="border-2 border-gray-950 p-[3px] rounded-full">
            <img src={logoIcon} className="w-6 h-6" alt="Logo" />
          </div>
          <span className="text-align: center">
            Developed by Rafael Achtenberg
          </span>
        </a>

        <div className="flex mr-4 gap-4">
          <a
            href="https://github.com/Faelkk"
            className="hover:scale-105 transition"
            target="_blank"
          >
            <GitHubLogoIcon className="w-7 h-7 " />
          </a>

          <a
            className="hover:scale-105 transition"
            href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
