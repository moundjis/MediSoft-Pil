"use client";
import React, { useState } from "react";

export default function AjouterBtn({ onClose }) {
  const [newOrdonnance, setNewOrdonnance] = useState({
    id: "",
    name: "",
    medicaments: "",
    date: new Date().toISOString().split("T")[0],
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrdonnance((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvelle ordonnance:", newOrdonnance);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter une ordonnance
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom de l'ordonnance
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newOrdonnance.name}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="medicaments"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Médicaments
              </label>
              <textarea
                id="medicaments"
                name="medicaments"
                value={newOrdonnance.medicaments}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 text-black text-sm shadow-sm focus:outline-none resize-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={newOrdonnance.date}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={newOrdonnance.instructions}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 shadow-sm focus:outline-none text-black text-sm resize-none"
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
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
