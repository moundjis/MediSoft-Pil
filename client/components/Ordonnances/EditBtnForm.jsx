"use client";
import React, { useState } from "react";

export default function EditBtnForm({ onClose }) {
  const [showEditBtn, SetEditBtn] = useState(false);

  const [updateOrdonnance, setUpdateOrdonnance] = useState({
    date: new Date().toISOString().split("T")[0],
    diagnostique: "",
    note: "",
    recommendation: "",
    DateCreation: new Date().toISOString().split("T")[0],
    DateDerniereModif: new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateOrdonnance((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier les infos de l'ordonnance
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          ></button>
        </div>
        <form className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="Date"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={handleInputChange}
                value={updateOrdonnance.date}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="diagnostique"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                diagnostique
              </label>
              <input
                type="text"
                id="diagnostique"
                name="diagnostique"
                value={updateOrdonnance.diagnostique}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="note"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Note
              </label>
              <input
                type="text"
                id="note"
                name="note"
                value={updateOrdonnance.note}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="recommendation"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Recommendation
              </label>
              <input
                type="text"
                id="recommendation"
                name="recommendation"
                value={updateOrdonnance.recommendation}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="dateCreation"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Date de création
              </label>
              <input
                type="date"
                id="dateCreation"
                name="dateCreation"
                value={updateOrdonnance.dateCreation}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="dateDerniereModif"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Date de la dernière modification
              </label>
              <input
                type="date"
                id="dateDerniereModif"
                name="dateDerniereModif"
                value={updateOrdonnance.dateDerniereModif}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
