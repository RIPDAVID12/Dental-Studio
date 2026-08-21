import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Servicios from "./Pages/Servicios";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </>
  );
}