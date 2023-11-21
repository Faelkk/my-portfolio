import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { ReactNode } from "react";

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
  <Dialog.Root open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className={classNameOverlay} />
      <Dialog.Content className={classNameContent}>
        <Dialog.Close asChild>
          <button
            className="absolute right-4 top-4"
            aria-label="Close"
            onClick={onClose}
          >
            <Cross2Icon className="h-7 w-7" />
          </button>
        </Dialog.Close>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
