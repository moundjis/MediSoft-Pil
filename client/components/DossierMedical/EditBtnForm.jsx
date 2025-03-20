"use client";
import React, { useState } from "react";

export default function EditBtnForm({ dossier, onClose }) {
  const [updateDossier, setUpdateDossier] = useState({
    prenom_nom_mere: dossier.prenom_nom_mere || "",
    prenom_nom_pere: dossier.prenom_nom_pere || "",
    antecedant_fam: dossier.antecedant_fam || "",
    maladies_chroniques: dossier.maladies_chroniques || "",
    allergies: dossier.allergies || "",
    traitements: dossier.traitements || "",
    dateCreation:
      dossier.dateCreation || new Date().toISOString().split("T")[0],
    dateDerniereModif: new Date().toISOString().split("T")[0], // Date de dernière modification par défaut
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateDossier((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dossier médical mis à jour :", updateDossier);

    // Ajoute ici la logique pour soumettre les données modifiées, par exemple avec un fetch
    // fetch("url_to_update_dossier", { method: "PUT", body: JSON.stringify(updateDossier) })
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier le dossier médical
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
                htmlFor="prenom_nom_mere"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Prénom et nom de la mère
              </label>
              <input
                type="text"
                id="prenom_nom_mere"
                name="prenom_nom_mere"
                value={updateDossier.prenom_nom_mere}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="prenom_nom_pere"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Prénom et nom du père
              </label>
              <input
                type="text"
                id="prenom_nom_pere"
                name="prenom_nom_pere"
                value={updateDossier.prenom_nom_pere}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="antecedant_fam"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Antécédents familiaux
              </label>
              <input
                type="text"
                id="antecedant_fam"
                name="antecedant_fam"
                value={updateDossier.antecedant_fam}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="maladies_chroniques"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Maladies chroniques
              </label>
              <input
                type="text"
                id="maladies_chroniques"
                name="maladies_chroniques"
                value={updateDossier.maladies_chroniques}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="allergies"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Allergies
              </label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                value={updateDossier.allergies}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="traitements"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Traitements
              </label>
              <input
                type="text"
                id="traitements"
                name="traitements"
                value={updateDossier.traitements}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                value={updateDossier.dateCreation}
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
                value={updateDossier.dateDerniereModif}
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
