"use client";
import React, { useState } from "react";

export default function AjouterEmployeBtn({ onClose }) {
  const [newEmploye, setNewEmploye] = useState({
    nom: "",
    prenom: "",
    date_de_naissance: new Date().toISOString().split("T")[0],
    nas: "",
    courriel: "",
    telephone: "",
    adresse: "",
    titre: "",
    specialite: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmploye((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvel employé:", newEmploye);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter un nouvel employé
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
                htmlFor="nom"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={newEmploye.nom}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={newEmploye.prenom}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date_de_naissance"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Date de naissance
              </label>
              <input
                type="date"
                id="date_de_naissance"
                name="date_de_naissance"
                value={newEmploye.date_de_naissance}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nas"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                NAS
              </label>
              <input
                type="text"
                id="nas"
                name="nas"
                value={newEmploye.nas}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="courriel"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Courriel
              </label>
              <input
                type="email"
                id="courriel"
                name="courriel"
                value={newEmploye.courriel}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
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
                value={newEmploye.telephone}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
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
                value={newEmploye.adresse}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="titre"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Titre
              </label>
              <select
                id="titre"
                name="titre"
                value={newEmploye.titre}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
                required
              >
                <option value="" disabled>
                  Sélectionnez un titre
                </option>
                <option value="Medecin">Médecin</option>
                <option value="Administrateur">Administrateur</option>
                <option value="sudo">sudo</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="specialite"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Spécialité
              </label>
              <input
                type="text"
                id="specialite"
                name="specialite"
                value={newEmploye.specialite}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
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
