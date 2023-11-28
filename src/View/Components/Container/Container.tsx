import { ReactNode } from "react";
import { cn } from "../../../App/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className: string;
  id: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <section className={cn("flex justify-center ", className)} id={id}>
      {children}
    </section>
  );
};

export default Container;
