import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Cars from "./pages/cars";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Cars />
      <Footer />
    </div>
  );
}

export default App;
