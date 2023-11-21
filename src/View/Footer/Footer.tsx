import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import logoIcon from "../../assets/android-chrome-512x512_1.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center  ">
      <div className="flex justify-between w-[95%] border-t border-700  pt-6 pb-6 ">
        <div className=" flex items-center  gap-3  ml-4">
          <div className="border-2 border-gray-950 p-[3px] rounded-full">
            <img src={logoIcon} className="w-6 h-6" alt="Logo" />
          </div>
          <span className="text-align: center">
            Developed by Rafael Achtenberg
          </span>
        </div>

        <div className="flex mr-4 gap-4">
          <GitHubLogoIcon className="h-7 w-7" />
          <LinkedInLogoIcon className="h-7 w-7" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
