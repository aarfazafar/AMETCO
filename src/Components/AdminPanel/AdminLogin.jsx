import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { ArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-700 flex flex-col items-center justify-center relative px-4">
      
      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-white flex items-center hover:underline text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Home
      </Link>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full px-4 py-3 rounded-md bg-white/5 text-white placeholder:text-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-white/5 text-white placeholder:text-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-white/30 hover:bg-white/40 text-white font-medium py-3 rounded-md transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
