import Navbar from "./components/Navbar";
import PortfolioBody from "./components/Body";
import Project from "./components/Project";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";


function App() {
  return (
    <>
      <title>Portfolio</title>
      <Navbar />
      <PortfolioBody />
      <AboutMe />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
