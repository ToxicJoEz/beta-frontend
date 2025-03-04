import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "flowbite";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound"; // Import the 404 page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
