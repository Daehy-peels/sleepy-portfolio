// ... (imports and theme logic)

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

return (
  <div /* ... theme classes */>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main className="flex-grow pt-16">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);
