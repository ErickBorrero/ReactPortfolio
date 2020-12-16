import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

// import NavBanner from "./components/NavBanner";
// import About from "./components/About";
// import Projects from "./components/Projects"
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
