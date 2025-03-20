"use client";
import React from "react";
import { useState } from "react"; // Import useState from React

import Antecedents from "@/components/Antecedents/Antecedents";

export default function InfosPatient({ patient, onClose }) {
  const [showAntecedents, setAntecedents] = useState(false);

  if (!patient) return null; // Ne rien afficher si aucun patient n'est sélectionné

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full h-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Détails du patient
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="h-[70vh] flex flex-col justify-around p-6">
          <p className="font-semibold">Nom: {patient.nom}</p>
          <p className="font-semibold">Prénom: {patient.prenom}</p>
          <p className="font-semibold">Courriel: {patient.courriel}</p>
          <p className="font-semibold">Téléphone: {patient.telephone}</p>
          <p className="font-semibold">Adresse: {patient.adresse}</p>
          <button
            className="text-white bg-blue-400 p-2 rounded-md drop-shadow-[5px_6px_6px_rgba(0,0,0,0.5)] self-end hover:cursor-pointer w-[150px]"
            onClick={() => setAntecedents(true)}
          >
            Dossier Médical
          </button>
        </div>
        {showAntecedents && (
          <Antecedents onClose={() => setAntecedents(false)} />
        )}
      </div>
    </div>
  );
}