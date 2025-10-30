import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider enableSystem={false} defaultTheme="light">
      <Navbar />
      <Hero />
    </Provider>
  );
}

export default App;
