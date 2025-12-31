import { Routes, Route, useLocation } from "react-router-dom";

/* Home Components */
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import ProtectedRoute from "./components/home/ProtectedRoute";

/* Public Pages */
import Home from "./pages/Home";
import TwoHallsView from "./pages/TwoHallsView";
import ContactPage from "./pages/ContactPage";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Admin Layout */
import AdminDashboard from "./pages/AdminDashboard";

/* Admin Pages */
import Dashboard from "./pages/AdminPages/Dashboard";
import Students from "./pages/AdminPages/Students";
import Rooms from "./pages/AdminPages/Rooms";
import Seats from "./pages/AdminPages/Seats";
import Review from "./pages/AdminPages/Review";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide Navbar on Admin */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<TwoHallsView />} />
        <Route path="/hallsroom" element={<TwoHallsView />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          {/* Default Admin Page */}
          <Route index element={<Dashboard />} />

          {/* Admin Tabs */}
          <Route path="students" element={<Students />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="seats" element={<Seats />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>

      {/* Hide Footer on Admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
