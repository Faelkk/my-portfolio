import Footer from "./View/Footer/Footer";
import Header from "./View/Header/Header";
import Home from "./View/Home/Home";
import About from "./View/About/About";
import Skills from "./View/Skills/Skills";
import Contact from "./View/Contact/Contact";
import ButtonScrollTop from "./View/BtnTop/Button";
import Projects from "./View/Projects/Projects";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ButtonScrollTop />
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
