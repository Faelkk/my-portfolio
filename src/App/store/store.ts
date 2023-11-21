import { create } from "zustand";

type UseStoreState = {
  status: {
    isDefault: boolean;
    isHovered: boolean;
    skillId: string;
  };
};

type UseStoreActions = {
  setStatus: (skillId: string) => void;
  clearStatus: () => void;
};

export type UseStoreProps = UseStoreState & UseStoreActions;

const useStatusStore = create<UseStoreProps>()((set) => ({
  status: {
    isDefault: false,
    isHovered: false,
    skillId: "",
  },
  setStatus: (skillId: string) => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: false,
          isHovered: true,
          skillId,
        },
      };
    });
  },
  clearStatus: () => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: true,
          isHovered: false,
          skillId: "",
        },
      };
    });
  },
}));

export default useStatusStore;
