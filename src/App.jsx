import { Routes, Route } from "react-router-dom";
import "flowbite";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound"; // Import the 404 page
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
