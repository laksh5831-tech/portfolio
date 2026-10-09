import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
