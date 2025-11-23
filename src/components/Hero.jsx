import React from "react";
import { useNavigate } from "react-router-dom";


export default function Hero() {

  const navigate=useNavigate();
  const goToMenu=()=>{
    navigate("/menu")
  }

  return (
    <section
      className="h-screen flex items-center justify-center text-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-6xl md:text-7xl font-extrabold text-green-300 drop-shadow-2xl">
          Eat Fresh, Live Healthy
        </h2>
        <p className="mt-5 text-gray-200 text-xl md:w-2/3 mx-auto">
          Healthy meals made from fresh organic ingredients served with love.
        </p>
        <button
          onClick={goToMenu}
          className="mt-8 bg-lime-400 text-black px-7 py-3 cursor-pointer text-xl font-semibold rounded-sm hover:bg-yellow-300 active:scale-95 duration-200"
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
}
