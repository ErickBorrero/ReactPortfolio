import './App.css';
import NavBanner from "./components/NavBanner";
import About from "./components/About";
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <NavBanner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
