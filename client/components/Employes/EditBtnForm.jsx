"use client";
import React, { useState } from "react";

export default function EditBtnForm({ onClose }) {
  const [showEditBtn, SetEditBtn] = useState(false);

  const [updateEmploye, setUpdateEmploye] = useState({
    nom: "",
    prenom: "",
    date_de_naissance: new Date().toISOString().split("T")[0],
    nas: "",
    courriel: "",
    telephone: "",
    password: "",
    adresse: "",
    id_role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateEmploye((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier les infos de l'employé
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <form className="p-6">
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
                onChange={handleInputChange}
                value={updateEmploye.nom}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                value={updateEmploye.prenom}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                value={updateEmploye.date_de_naissance}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                value={updateEmploye.nas}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                value={updateEmploye.courriel}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={updateEmploye.password}
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
                value={updateEmploye.telephone}
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
                value={updateEmploye.adresse}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="id_role"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Rôle/Titre
              </label>
              <select
                id="id_role"
                name="id_role"
                value={updateEmploye.id_role}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Sélectionnez un rôle/titre
                </option>
                <option value="1">Sudo</option>
                <option value="2">Administrateur</option>
                <option value="3">Ophtalmologue</option>
                <option value="4">Dermatologue</option>
                <option value="6">Dentiste</option>
                <option value="7">Cardiologue</option>
              </select>
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
