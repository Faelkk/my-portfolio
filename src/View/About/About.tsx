import imgCoding from "../../assets/defaults/Hand coding-bro.svg";

const About = () => {
  return (
    <section className="flex  justify-center items-center mt-20 " id="about">
      <section className="flex  md:justify-between items-center w-[90%] ">
        <div className="hidden   md:w-[50%] md:max-w-[50%] md:h-full lg:flex   ">
          <img
            src={imgCoding}
            className="lg:w-[400px] 2xl:w-[700px] 2xl:h-[600px]"
          />
        </div>

        <div className="flex flex-col justify-center items-center lg:w-[50%] gap-4 ">
          <h2 className="font-bold text-4xl mb-10">Sobre mim</h2>

          <p className="2xl:text-[1.4rem]">
            Olá, meu nome é Rafael Achtenberg e tenho 15 anos. Sou um entusiasta
            de programação, mergulhando no universo do desenvolvimento full
            stack há alguns meses. Minha jornada começou com a intenção de
            aprender e crescer nesse campo fascinante. Estou em busca da minha
            primeira oportunidade profissional e dedicando meu tempo para
            aprimorar minhas habilidades.
          </p>

          <p className="2xl:text-[1.4rem]">
            Me considero uma pessoa colaborativa, acredito no poder do trabalho
            em equipe e estou sempre disposto a contribuir para alcançar os
            melhores resultados. Atualmente, estou imerso no estudo de
            tecnologias como <strong>Next, Nestjs e React Native</strong>. Minha
            determinação é permanecer em constante evolução tecnológica,
            preparando-me para enfrentar novos desafios que possam surgir.
          </p>

          <p className="2xl:text-[1.4rem]">
            Estou animado para explorar oportunidades e agregar valor a
            projetos. Se precisar de um profissional comprometido, estou aqui
            para colaborar.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
