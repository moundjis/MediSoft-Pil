"use client";
import { useState, useEffect } from "react";
import PrescriptionGabarit from "./PrescriptionGabarit";
import colonnes from "@/public/data/prescriptionColonnes";
import AjouterBtn from "@/components/Prescription/AjouterBtn";

export default function Prescriptions() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);

  // Récupère la liste des prescriptions au chargement de la page
  useEffect(() => {
    GetAllPrescription();
  }, []);

  async function GetAllPrescription() {
    try {
      // Envoi de la requête pour obtenir les prescriptions
      const response = await fetch("http://localhost:5000/api/prescription");
      if (!response.ok) {
        throw new Error("Failed to fetch consultation");
      }
      const prescriptions = await response.json();
      setPrescriptions(prescriptions.data); // Mise à jour de la liste des prescriptions
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Liste des prescriptions
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
          {prescriptions.map((prescription) => (
            <PrescriptionGabarit
              key={prescription.id}
              prescription={prescription}
              onDetail={() => {}}
            />
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
