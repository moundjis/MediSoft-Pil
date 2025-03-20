"use client";
import React from "react";

export default function InfosOrdonnance({ ordonnance, onClose }) {
  if (!ordonnance) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl h-full w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Détails de l'ordonnance
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <p className="font-semibold">ID: {ordonnance.id}</p>
          <p className="font-semibold">Date de l'ordonnance: {ordonnance.date_ordonnance}</p>
          <p className="font-semibold">Note: {ordonnance.note}</p>
          <p className="font-semibold">ID de la pharmacie: {ordonnance.id_pharmacie}</p>
        </div>
      </div>
    </div>
  );
}