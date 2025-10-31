import Fresh from "./components/fresh";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Provider } from "./components/ui/provider";
import Wellbeing from "./components/Wellbeing";
import WellbeingDesktop from "./components/WellbeingDesktop";

function App() {
  return (
    <Provider enableSystem={false} defaultTheme="light">
      <Navbar />
      <Hero />
      <Wellbeing />
      <WellbeingDesktop />
      <Fresh />
    </Provider>
  );
}

export default App;
