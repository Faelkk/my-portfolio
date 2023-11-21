import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavigationHeader from "./NavigationHeader";

const DropdownMenu = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6  fixed inset-0" />
      <Dialog.Content className=" fixed  top-0 w-full h-[50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] ">
        <Dialog.Close asChild>
          <button className="absolute right-2 top-8" aria-label="Close">
            <Cross2Icon className="h-7 w-7" />
          </button>
        </Dialog.Close>

        <NavigationHeader
          ClassNameUL="flex flex-col gap-2"
          ClassNameNav="flex h-full w-full justify-center items-center"
          classNameLI="text-2xl font-bold"
        />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DropdownMenu;
