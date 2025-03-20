"use client";
import React from "react";

export default function InfoBtn({ ordonnanceId, onDetail }) {
  const handleDetail = () => {
    onDetail(ordonnanceId); // Appelle la fonction onDetail avec l'ID de l'ordonnance
  };

  return (
    <div>
      <button
        onClick={handleDetail}
        className="w-full bg-gray-500 text-white p-1 my-1 rounded-md hover:bg-gray-700"
      >
        Infos
      </button>
    </div>
  );
}