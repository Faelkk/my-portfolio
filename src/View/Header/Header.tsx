import { useIsVisibleItemOnScreen } from "../../App/hooks/useIsVisibleItemOnScreen";
import { useWindowWidth } from "../../App/hooks/useWindowWidth";
import { cn } from "../../App/utils/cn";
import logoIcon from "../../assets/icons/android-chrome-512x512_1.svg";
import Modal from "../Components/Modal/Modal";
import useModal from "../Components/Modal/useModal";

import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();
  const { width } = useWindowWidth();

  return (
    <header className="flex justify-center ">
      <nav
        ref={elementRef}
        className={cn(
          "flex items-center border-b border-700 justify-between w-[95%] pt-6 pb-6  ",
          isVisible ? " animate-startSlideDown" : ""
        )}
      >
        <a
          href="https://github.com/Faelkk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 ml-4"
        >
          <figure className="border-2 border-gray-950 flex items-center rounded-full p-[3px]">
            <img
              src={logoIcon}
              className="w-6 h-6 2xl:w-8 2xl:h-8"
              alt="Logo"
            />
          </figure>
          <h1 className="font-bold text-xl 2xl:text-[1.3rem]">Rafael</h1>
        </a>

        {width >= 768 ? (
          <NavigationHeader ClassNameUL="flex gap-6 mr-4 2xl:text-[1.1rem]" />
        ) : (
          <>
            <button onClick={handleOpenModal} aria-label="Open Menu">
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>

            <Modal
              classNameContent="fixed top-0 w-full h-[50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-startSlideDown"
              open={isVisibleModal}
              onClose={handleCloseModal}
            >
              <NavigationHeader
                ClassNameUL="flex flex-col gap-2"
                ClassNameNav="flex h-full w-full justify-center items-center"
                classNameLI="text-2xl font-bold"
                onClickNavigate={handleCloseModal}
              />
            </Modal>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
