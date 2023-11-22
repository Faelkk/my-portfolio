import { forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../../App/utils/cn";

interface TextAreaProps {
  error: string | undefined;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, value, onChange }, ref) => {
    return (
      <div className="relative">
        <textarea
          value={value}
          onChange={(event) => onChange && onChange(event)}
          ref={ref}
          rows={3}
          placeholder="Escreva sua mensagem"
          className={cn(
            "outline-none placeholder:text-slate-950 resize-none bg-white p-2 rounded-md w-full border-gray-500 text-gray-800 focus:border-gray-800 transition-all  border",
            error && " border-red-900 focus:border-red-900"
          )}
        />

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className=" text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

export default Textarea;
