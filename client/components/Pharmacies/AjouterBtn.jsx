"use client"; // Directive pour indiquer que ce composant est côté client

import React, { useState } from "react";

export default function AjouterBtn({ onClose }) {
  const [newPharmacie, setNewPharmacie] = useState({
    nom: "",
    adresse: "",
    telephone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPharmacie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvelle pharmacie:", newPharmacie);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter une pharmacie
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
            {/* Champ Nom */}
            <div>
              <label
                htmlFor="nom"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={newPharmacie.nom}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Adresse */}
            <div>
              <label
                htmlFor="adresse"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={newPharmacie.adresse}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Téléphone */}
            <div>
              <label
                htmlFor="telephone"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Téléphone
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={newPharmacie.telephone}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
                maxLength={10} // Limite à 10 caractères
              />
            </div>

            {/* Champ Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newPharmacie.email}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Boutons de soumission et d'annulation */}
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