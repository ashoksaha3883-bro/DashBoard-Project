import React, { useState } from "react";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality would be implemented here");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded-md focus:outline-none focus:border-orange-400"
        required
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-3 rounded-md focus:outline-none focus:border-orange-400"
        required
      />
      <button
        type="submit"
        className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold"
      >
        Login
      </button>
    </form>
  );
}