import React from "react";
import LoginForm from "./LoginForm";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl hover:text-orange-500"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Login to NextGen</h2>
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
}