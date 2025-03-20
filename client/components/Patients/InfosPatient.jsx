"use client";
import React, { useState } from "react";
import patients from "@/public/data/patients.json";
import Antecedents from "@/components/Antecedents/Antecedents";

export default function InfosPatient({ onClose }) {
  const [showAntecedents, setAntecedents] = useState(false);

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
          {patients.map((details) => (
            <p key={details.id} className="font-semibold">
              {details.name}
            </p>
          ))}
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
