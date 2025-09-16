import { Home } from './components/sections/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className="relative mx-auto mt-6 max-w-xl px-6">
      {/* All sections stack inside here */}
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
