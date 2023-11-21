import { useForm } from "react-hook-form";

const useContact = () => {
  const { handleSubmit: hookFormSubmit, register } = useForm();

  const handleSubmit = hookFormSubmit(() => {
    console.log("teste");
  });

  return { handleSubmit, register };
};

export default useContact;
