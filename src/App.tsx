import Fresh from "./components/fresh";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Startswith from "./components/Startswith";
import { Provider } from "./components/ui/provider";
import Wellbeing from "./components/Wellbeing";
import WellbeingDesktop from "./components/WellbeingDesktop";
import Youare from "./components/Youare";

function App() {
  return (
    <Provider enableSystem={false} defaultTheme="light">
      <Navbar />
      <Hero />
      <Wellbeing />
      <WellbeingDesktop />
      <Fresh />
      <Youare />
      <Startswith />
    </Provider>
  );
}

export default App;
