import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import Halls from "./pages/TwoHallsView";
import Footer from "./components/home/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<Halls />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
