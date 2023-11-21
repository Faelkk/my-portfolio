import { useState } from "react";

const useHeader = () => {
  const [isVisibleDropDownMenu, setisVisibleDropDownMenu] = useState(false);

  function handleOpenDropdownMenu() {
    setisVisibleDropDownMenu(true);
  }
  function handleCloseDropdownMenu() {
    setisVisibleDropDownMenu(false);
  }

  return {
    isVisibleDropDownMenu,
    handleOpenDropdownMenu,
    handleCloseDropdownMenu,
  };
};

export default useHeader;
