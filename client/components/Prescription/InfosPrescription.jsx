"use client";
import React from "react";
import prescriptions from "@/public/data/prescriptions.json";

export default function InfosPrescription({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl h-full w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Détails de la prescription
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="h-full flex flex-col justify-around p-6">
          {prescriptions.map((details) => (
            <p key={details.id} className="font-semibold">
              {details.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
