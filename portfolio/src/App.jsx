import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Speaking from "./pages/Speaking";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Project />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}