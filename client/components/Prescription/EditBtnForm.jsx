"use client";
import React, { useState } from "react";

export default function EditPrescriptionForm({ onClose }) {
  const [updatePrescription, setUpdatePrescription] = useState({
    medicament: "",
    dosage: "",
    quantite: "",
    note_medecin: "",
    renouvellement: "",
    id_ordonnance: "",
    id_consultation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatePrescription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier la prescription
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form className="p-6">
          <div className="space-y-4">
            {/* Médicament */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Médicament
              </label>
              <input
                type="text"
                name="medicament"
                value={updatePrescription.medicament}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Dosage */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Dosage
              </label>
              <input
                type="text"
                name="dosage"
                value={updatePrescription.dosage}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Quantité */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Quantité
              </label>
              <input
                type="number"
                name="quantite"
                value={updatePrescription.quantite}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Note du médecin */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Note du médecin
              </label>
              <textarea
                name="note_medecin"
                value={updatePrescription.note_medecin}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Renouvellement */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Renouvellement
              </label>
              <select
                name="renouvellement"
                value={updatePrescription.renouvellement}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>

            {/* ID Ordonnance */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                ID Ordonnance
              </label>
              <input
                type="text"
                name="id_ordonnance"
                value={updatePrescription.id_ordonnance}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* ID Consultation */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                ID Consultation
              </label>
              <input
                type="text"
                name="id_consultation"
                value={updatePrescription.id_consultation}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
