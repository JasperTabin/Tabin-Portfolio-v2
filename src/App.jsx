import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Home } from "./components/sections/Home";
import { Navbar } from "./components/Navbar";
import { ResumeTabs } from "./components/sections/ResumeTabs";
import { TechStack } from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";
import Type from "./components/sections/Type";

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative mx-auto mt-6 max-w-xl px-6 space-y-10 overflow-hidden"
    >
      <Navbar />
      <Home />
      <TechStack />
      <ResumeTabs />
      <Projects />
      <Type />
      <Footer />
    </main>
  );
}
