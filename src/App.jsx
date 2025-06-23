// node modules
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


// register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// CSS
import "./index.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";

const App = () => {

  useGSAP(()=> {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger:{
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 70%',
          scrub: true,
          markers: false,
        },
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
    });
  });

  return (
    <>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Work />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;
