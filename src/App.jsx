import { Home } from "./components/sections/Home";
import { Navbar } from "./components/Navbar";
import { ResumeTabs } from "./components/sections/ResumeTabs";

function App() {
  return (
    <main className="relative mx-auto mt-6 max-w-xl px-6">
      <Navbar />
      <Home />
      <ResumeTabs />   
    </main>
  );
}

export default App;
