import { useState } from "react";

const useModal = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function handleOpenModal() {
    setIsVisibleModal(true);
  }
  function handleCloseModal() {
    setIsVisibleModal(false);
  }

  return {
    isVisibleModal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
