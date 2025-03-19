"use client";
import { useState, useEffect } from "react";
import ConsultationGabarit from "./ConsultationGabarit";
import colonnes from "@/public/data/consultationColonnes";
import AjouterBtn from "@/components/Consultations/AjouterBtn";

export default function Consultations() {
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [consultations, setConsultations] = useState([]);

  // Récupère la liste des consultations au chargement de la page
  useEffect(() => {
    GetAllConsultations();
  }, []);

  async function GetAllConsultations() {
    try {
      // Envoi de la requête pour obtenir les consultations
      const response = await fetch("http://localhost:5000/api/consultation");
      if (!response.ok) {
        throw new Error("Failed to fetch consultation");
      }
      const consultations = await response.json();
      setConsultations(consultations.data); // Mise à jour de la liste des employés
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }



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
          {consultations.map((consultation) => (
            <ConsultationGabarit key={consultation.id} consultation={consultation} onDetail={() => {}} />
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
