import { Home } from "./components/sections/Home";
import { Navbar } from "./components/Navbar";
import { ResumeTabs } from "./components/sections/ResumeTabs";
import { TechStack } from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import  Footer  from "./components/Footer";
import Type from "./components/sections/Type";

function App() {
  return (
    <main className="relative mx-auto mt-6 max-w-xl px-6 space-y-6">
      <Navbar />
      <Home />
      <TechStack />
      <ResumeTabs />
      <Projects/>
      <Type />
      <Footer />
    </main>
  );
}

export default App;
