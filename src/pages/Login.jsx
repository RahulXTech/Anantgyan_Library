import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        // Store token or user info as needed
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        alert(data.message || "Login failed!");
      }
  } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/949118068/photo/books.jpg?s=1024x1024&w=is&k=20&c=CDrLRc8X_JrFr-uDbNKrOKrmfIV_M2Af7z1Hb3cYEvY=')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-[95%] max-w-md px-8 py-10 text-white">

        <h2 className="text-3xl font-bold text-center">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Login to continue your learning journey
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>

            <div className="relative mt-2">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-300 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}
