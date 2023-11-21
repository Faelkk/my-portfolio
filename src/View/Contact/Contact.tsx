import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import useContact from "./useContact";

const Contact = () => {
  const { handleSubmit } = useContact();

  return (
    <section className="flex justify-center items-center my-20">
      <section className="grid  md:grid-cols-2 w-[90%] gap-5">
        <div className="flex flex-col gap-5 bg-[#eee] rounded-md p-5">
          <h2 className="font-bold text-3xl">Entre em contato Comigo</h2>

          <p>
            Procurando por um desenvolvedor ou gostaria de compartilhar seu
            feedback? Fique à vontade para entrar em contato comigo! Estou
            empolgado para responder e ajudar o mais rápido possível. Utilize
            qualquer um dos métodos abaixo para se conectar comigo.
          </p>

          <div className="flex gap-2">
            <GitHubLogoIcon className="w-8 h-8" />
            <LinkedInLogoIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="flex justify-center ">
          <form
            className="flex flex-col w-full bg-[#f9f5f5] p-5 rounded-md md:w-[80%] gap-4 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nome"
              className="outline-none placeholder:text-slate-950 bg-white p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="outline-none placeholder:text-slate-950 bg-white p-2 rounded-md"
            />

            <textarea
              rows={3}
              placeholder="Escreva sua mensagem"
              className="outline-none placeholder:text-slate-950 resize-none bg-white p-2 rounded-md"
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
    </section>
  );
};

export default Contact;
