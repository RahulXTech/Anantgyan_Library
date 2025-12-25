import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import Halls from "./pages/TwoHallsView";
import Footer from "./components/home/Footer";
import Contact from "./pages/ContactPage";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<Halls />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
