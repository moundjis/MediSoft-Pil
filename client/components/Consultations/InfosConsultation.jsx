"use client";
import React from "react";

export default function InfosConsultation({ consultation, onClose }) {
  if (!consultation) return null; // Ne rien afficher si aucune consultation n'est sélectionnée

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl h-full w-full max-w-2xl flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Détails de la consultation
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6"> {/* Ajout de overflow-y-auto pour le scroll */}
          <p className="font-semibold">ID: {consultation.id}</p>
          <p className="font-semibold">Diagnostic: {consultation.diagnostic}</p>
          <p className="font-semibold">Note: {consultation.note}</p>
          <p className="font-semibold">Recommendations: {consultation.Recommendations}</p>
          <p className="font-semibold">ID du patient: {consultation.id_patient}</p>
          
        </div>
      </div>
    </div>
  );
}