import Footer from "./View/Footer/Footer";
import Header from "./View/Header/Header";
import Home from "./View/Home/Home";
import About from "./View/About/About";
import Skills from "./View/Skills/Skills";
import Contact from "./View/Contact/Contact";
import ButtonScrollTop from "./View/BtnTop/Button";
import Projects from "./View/Projects/Projects";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ButtonScrollTop />
        <Footer />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </>
  );
};

export default App;
