"use client";
import { useState, useEffect } from "react";
import PharmacieGabarit from "./PharmacieGabarit";
import colonnes from "@/public/data/pharmacieColonnes";
import AjouterBtn from "@/components/Pharmacies/AjouterBtn";

export default function Pharmacies() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);

  // Récupère la liste des pharmacies au chargement de la page
  useEffect(() => {
    GelAllPharmacies();
  }, []);

  async function GelAllPharmacies() {
    try {
      // Envoi de la requête pour obtenir les pharmacies
      const response = await fetch("http://localhost:5000/api/pharmacie");
      if (!response.ok) {
        throw new Error("Failed to fetch consultation");
      }
      const pharmacies = await response.json();
      setPharmacies(pharmacies.data); // Mise à jour de la liste des pharmacies
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

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
          {pharmacies.map((pharmacie) => (
            <PharmacieGabarit
              key={pharmacie.id}
              pharmacie={pharmacie}
              onDetail={() => {}}
            />
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
