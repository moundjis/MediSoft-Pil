"use client";
import React from "react";
import { useState } from "react";

import consultations from "@/public/data/consultations";
import AjouterBtn from "@/components/Consultations/AjouterBtn";

export default function Consultations() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Liste des consultations
      </h1>
      <button
        className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600"
        onClick={() => setAjouterBtn(true)}
      >
        Ajouter
      </button>
      <table className="w-full">
        <thead>
          <tr className="bg-yellow-400">
            {consultations.map((consultations) => (
              <th
                key={consultations.id}
                className="px-4 py-3 text-left text-sm font-medium text-white border border-3"
              >
                {consultations.name}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
