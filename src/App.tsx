import Navbar from "./components/navbar";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider enableSystem={false} defaultTheme="light">
      <Navbar />
    </Provider>
  );
}

export default App;
