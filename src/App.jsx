import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import Halls from "./pages/TwoHallsView";
import Footer from "./components/home/Footer";
import Contact from "./pages/ContactPage";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/home/ProtectedRoute";


function App() {

  // 🔑 current route ka path lene ke liye
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>

    {/* Admin pages pe Navbar hide */}
    {!isAdminRoute && <Navbar />}

      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<Halls />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        {/* Admin */}
         <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

    {/* Admin pages pe Footer hide */}
   {!isAdminRoute && <Footer />}
   
    </>
  );
}

export default App;
