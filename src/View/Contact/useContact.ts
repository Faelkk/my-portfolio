import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().nonempty("Email é obrigatório").email(),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const useContact = () => {
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  return { control, errors, handleSubmit, register };
};

export default useContact;
