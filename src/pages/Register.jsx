import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("Password not matched");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/949118068/photo/books.jpg?s=1024x1024&w=is&k=20&c=CDrLRc8X_JrFr-uDbNKrOKrmfIV_M2Af7z1Hb3cYEvY=')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-[95%] max-w-md px-8 py-10 text-white">

        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          <input
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30"
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />

          <button className="w-full bg-blue-600 py-3 rounded-lg">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login Now
          </Link>
        </p>
      </div>
    </section>
  );
}
