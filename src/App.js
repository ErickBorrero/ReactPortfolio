import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

// import NavBanner from "./components/NavBanner";
// import About from "./components/About";
// import Projects from "./components/Projects"
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
