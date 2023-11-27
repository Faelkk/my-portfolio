import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useRef } from "react";

const schema = z.object({
  user_name: z.string().nonempty("Nome é obrigatório"),
  user_email: z.string().nonempty("Email é obrigatório").email(),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const useContact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit: SubmitHandler<FormData> = async () => {
    try {
      if (formRef.current) {
        console.log(formRef.current);

        const result = await emailjs.sendForm(
          "achfaelMessage",
          "template_y1py0zq",
          formRef.current,
          "_FXMz8RtEJZw6v39w"
        );

        console.log(result.text);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    control,
    errors,
    handleSubmit: hookFormSubmit(handleSubmit),
    register,
    formRef,
  };
};

export default useContact;
