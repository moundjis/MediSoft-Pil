"use client";
import React, { useState } from "react";

export default function EditBtnForm({ onClose }) {
  const [updateData, setUpdateData] = useState({
    id: "",
    nom: "",
    adresse: "",
    telephone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données mises à jour :", updateData);
    // Ajoute ici la logique pour envoyer les données mises à jour au backend
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier les infos
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="id"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={updateData.id}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                disabled
              />
            </div>

            <div>
              <label
                htmlFor="nom"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={updateData.nom}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="adresse"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={updateData.adresse}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Téléphone
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={updateData.telephone}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={updateData.email}
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
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
