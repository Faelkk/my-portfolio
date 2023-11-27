import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { ReactNode } from "react";
import { cn } from "../../../App/utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  classNameContent?: string;
  classNameOverlay?: string;
  children: ReactNode;
}

const Modal = ({
  open,
  classNameContent,
  classNameOverlay,
  children,
  onClose,
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay
        className={cn(
          "fixed inset-0  z-51    data-[state=open]:animate-overlayShow",
          classNameOverlay
        )}
      />
      <Dialog.Content
        className={cn(
          " data-[state=open]:animate-contentShow",
          classNameContent
        )}
      >
        <button
          className="absolute right-0 top-0 outline-none "
          aria-label="Close"
          onClick={onClose}
        >
          <Cross2Icon className="h-7 w-7" />
        </button>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
