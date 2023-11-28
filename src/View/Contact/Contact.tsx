import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import useContact from "./useContact";
import Input from "../Components/Input/Input";
import Textarea from "../Components/Textarea/Textarea";
import { Controller } from "react-hook-form";

import emailIcon from "../../assets/icons/gmail-svgrepo-com.svg";

const Contact = () => {
  const { control, errors, handleSubmit, register, formRef } = useContact();

  return (
    <main className="flex justify-center items-center my-20" id="contact">
      <section className="grid  md:grid-cols-2 w-[90%] gap-5">
        <div className="flex flex-col gap-5 bg-[#eee] rounded-md p-5">
          <h2 className="font-bold text-4xl mb-6">Entre em contato Comigo</h2>

          <section className="flex flex-col  justify-between gap-6 flex-1">
            <p className="text-md">
              Procurando por um desenvolvedor ou gostaria de compartilhar seu
              feedback? Fique à vontade para entrar em contato comigo! Estou
              empolgado para responder e ajudar o mais rápido possível. Utilize
              qualquer um dos métodos abaixo para se conectar comigo.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Faelkk"
                target="_blank"
                className="hover:scale-105 transition"
              >
                <GitHubLogoIcon className="w-8 h-8" />
              </a>

              <a
                className="hover:scale-105 transition"
                href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
                target="_blank"
              >
                <LinkedInLogoIcon className="w-8 h-8" />
              </a>

              <a
                href="mailto:achtenberg.rafa@gmail.com"
                target="_blank"
                className="hover:scale-105 transition"
              >
                <img src={emailIcon} alt="Email" className="h-8 w-8" />
              </a>
            </div>
          </section>
        </div>

        <div className="flex justify-center ">
          <form
            ref={formRef}
            className="flex flex-col w-full bg-[#f9f5f5] p-5 rounded-md md:w-[80%] gap-4 "
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Nome"
              className="outline-none placeholder:text-slate-950 bg-white p-2 rounded-md"
              error={errors.user_name?.message}
              {...register("user_name")}
            />
            <Input
              type="email"
              placeholder="E-mail"
              className="outline-none placeholder:text-slate-950 bg-white p-2 rounded-md "
              error={errors.user_email?.message}
              {...register("user_email")}
            />
            <Controller
              control={control}
              name="message"
              render={({ field: { onChange, value } }) => (
                <Textarea
                  name="message"
                  onChange={onChange}
                  value={value}
                  error={errors.message ? errors.message.message : undefined}
                />
              )}
            />

            <button
              type="submit"
              className="text-xl bg-blue-600 text-fuchsia-50 rounded-md p-2"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
