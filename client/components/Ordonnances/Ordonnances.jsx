"use client";
import { useState, useEffect } from "react";
import OrdonnanceGabarit from "./OrdonnanceGabarit";
import colonnes from "@/public/data/ordonnanceColonnes";
import AjouterBtn from "@/components/Ordonnances/AjouterBtn";

export default function Ordonnances() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [ordonnances, setOrdonnances] = useState([]);

  // Récupère la liste des pharmacies au chargement de la page
  useEffect(() => {
    GetAllOrdonnance();
  }, []);

  async function GetAllOrdonnance() {
    try {
      // Envoi de la requête pour obtenir les ordonnances
      const response = await fetch("http://localhost:5000/api/ordonnance");
      if (!response.ok) {
        throw new Error("Failed to fetch ordonnance");
      }
      const ordonnances = await response.json();
      setOrdonnances(ordonnances.data); // Mise à jour de la liste des ordonnances
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Liste des ordonnances
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
            {colonnes.map((colonne) => (
              <th
                key={colonne.id}
                className="px-4 py-3 text-left text-sm font-medium text-white border border-3"
              >
                {colonne.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ordonnances.map((ordonnance) => (
            <OrdonnanceGabarit
              key={ordonnance.id}
              ordonnance={ordonnance}
              onDetail={() => {}}
            />
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
