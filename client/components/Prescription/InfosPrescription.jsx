"use client";
import React from "react";

export default function InfosPrescription({ prescription, onClose }) {
  if (!prescription) return null; // Ne rien afficher si aucune prescription n'est sélectionnée

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl h-full w-full max-w-2xl flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Détails de la prescription
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <p className="font-semibold">ID: {prescription.id}</p>
          <p className="font-semibold">Médicament: {prescription.medicament}</p>
          <p className="font-semibold">Dosage: {prescription.dosage}</p>
          <p className="font-semibold">Quantité: {prescription.quantite}</p>
          <p className="font-semibold">Note du médecin: {prescription.note_medecin}</p>
          <p className="font-semibold">Renouvellement: {prescription.renouvellement ? "Oui" : "Non"}</p>
          <p className="font-semibold">ID de l'ordonnance: {prescription.id_ordonnance}</p>
          <p className="font-semibold">ID de la consultation: {prescription.id_consultation}</p>
        </div>
      </div>
    </div>
  );
}