"use client";
import { useState, useEffect } from "react";
import RendezVousGabarit from "./RendezVousGabarit";
import colonnes from "@/public/data/rendezvous";
import AjouterBtn from "@/components/RendezVous/AjouterBtn";
export default function RendezVous() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [rendezVous, setRendezVous] = useState([]);

  // Récupère la liste des pharmacies au chargement de la page
  useEffect(() => {
    GetAllRendezVous();
  }, []);

  async function GetAllRendezVous() {
    try {
      // Envoi de la requête pour obtenir les rendez vous
      const response = await fetch("http://localhost:5000/api/rendez-vous");
      if (!response.ok) {
        throw new Error("Failed to fetch rendez vous");
      }
      const rendezVous = await response.json();
      setRendezVous(rendezVous.data); // Mise à jour de la liste des rendez vous
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl text-black py-2">
          Liste des rendez-vous
        </h1>
        <button
          className="text-white text-sm bg-blue-400 px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => setAjouterBtn(true)}
        >
          Ajouter
        </button>
      </div>
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
          {rendezVous.map((rdv) => (
            <RendezVousGabarit
              key={rdv.id}
              rendezVou={rdv}
              onDetail={() => {}}
            />
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
