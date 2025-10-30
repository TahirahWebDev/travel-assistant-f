"use client";
import { useState } from "react";
import { useAuth } from "../plan/PlanContext";
import { useRouter } from "next/navigation";

export default function LoginSignupPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login({ name: form.name || "User", email: form.email });
      router.push("/");
    } else {
      setSuccess("Signup successful! You can now login.");
      setForm({ name: "", email: "", password: "" });
      setTimeout(() => setIsLogin(true), 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-md w-full mx-4 border-2 border-blue-200">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <button
          onClick={() => { setIsLogin((v) => !v); setSuccess(""); }}
          className="mt-4 text-blue-600 hover:underline w-full"
        >
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </button>
        {success && <div className="mt-4 text-green-600 text-center">{success}</div>}
      </div>
    </div>
  );
} 