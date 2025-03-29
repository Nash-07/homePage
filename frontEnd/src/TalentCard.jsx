import React from "react";

const TalentCard = () => {
  return (
    <div className="relative w-full h-[500px] bg-black text-white">
      <img
        src="https://via.placeholder.com/1500x500"  // Replace with actual image URL or import statement
        alt="Talent"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Deimante</h1>
        <h2 className="text-2xl">DELHI</h2>
        <p className="text-sm mt-4">Back In Town</p>
        <p className="text-sm">By Auraa Talents</p>
      </div>
    </div>
  );
};

export default TalentCard;
