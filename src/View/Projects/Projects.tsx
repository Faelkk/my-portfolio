const Projects = () => {
  return (
    <section className="flex  justify-center items-center mt-6 " id="projects">
      <section className="flex flex-col items-center w-full">
        <h2 className="font-bold text-4xl mb-10">Meus projetos</h2>

        <section className="flex flex-wrap justify-center gap-3 ">
          <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
            <h3 className="text-xl font-bold">fincheck</h3>
            <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
              Ver mais
            </button>
          </div>

          <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
            <h3 className="text-xl font-bold">fincheck</h3>
            <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
              Ver mais
            </button>
          </div>

          <div className="bg-blue-600 h-72 w-44 rounded-lg flex flex-col justify-between items-center py-6 hover:border hover:border-blue-900 cursor-pointer md:h-80 md:w-48">
            <h3 className="text-xl font-bold">fincheck</h3>
            <button className="bg-slate-50 w-28 py-1 rounded-lg text-blue-950 font-semibold">
              Ver mais
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Projects;
