"use client";
import { useState } from "react";

import pharmacie from "@/public/data/pharmacie";
import AjouterBtn from "@/components/Pharmacies/AjouterBtn";

export default function Pharmacies() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Liste des pharmacies
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
            {pharmacie.map((pharmacie) => (
              <th
                key={pharmacie.id}
                className="px-4 py-3 text-left text-sm font-medium text-white border border-3"
              >
                {pharmacie.name}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
