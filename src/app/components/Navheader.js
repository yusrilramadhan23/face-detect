import React from "react";

const Navheader = () => {
  return (
    <header className="text-center">
      <h1
        className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 text-transparent bg-clip-text shadow-lg inline-block"
        style={{ filter: "drop-shadow(0 0 10px rgba(120, 255, 180, 0.7))" }}
      >
        AuraSee 🌙
      </h1>
      <p className="mt-2">Meramal berdasarkan foto selfie kalian</p>
    </header>
  );
};

export default Navheader;
