import { useWindowWidth } from "../../App/hooks/useWindowWidth";

import logoIcon from "../../assets/android-chrome-512x512_1.svg";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
import DropdownMenu from "./Components/DropdownMenu/DropdownMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useHeader from "./useHeader";

const Header = () => {
  const {
    isVisibleDropDownMenu,
    handleOpenDropdownMenu,
    handleCloseDropdownMenu,
  } = useHeader();
  const { width } = useWindowWidth();

  return (
    <header className="flex  justify-center">
      <div className="flex items-center border-b border-700  justify-between w-[95%] pt-6 pb-6 ">
        <div className="flex items-center gap-3 ml-4">
          <div className="border-2 border-gray-950 flex items-center rounded-full p-[3px] ">
            <img
              src={logoIcon}
              className="w-6 h-6 2xl:w-8 2xl:h-8"
              alt="Logo"
            />
          </div>

          <h1 className="font-bold text-xl 2xl:text-[1.3rem]">Rafael</h1>
        </div>

        {width >= 768 ? (
          <NavigationHeader ClassNameUL="flex gap-6 mr-4 2xl:text-[1.3rem]" />
        ) : (
          <>
            <button onClick={handleOpenDropdownMenu}>
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>

            <DropdownMenu
              open={isVisibleDropDownMenu}
              onClose={handleCloseDropdownMenu}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
