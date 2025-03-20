"use client";
import React, { useState } from "react";

export default function AjouterBtn({ onClose }) {
  // État pour stocker les données du formulaire
  const [newDossier, setNewDossier] = useState({
    prenom_nom_mere: "",
    prenom_nom_pere: "",
    antecedant_fam: "",
    maladies_chroniques: "",
    allergies: "",
    traitements: "",
    id_patient: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDossier((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouveau dossier médical:", newDossier);

    try {
      const response = await fetch(
        "http://localhost:5000/api/dossier-medical",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDossier),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du dossier médical");
      }

      const data = await response.json();
      console.log("Dossier médical ajouté avec succès:", data);

      onClose();

      window.location.reload();
    } catch (error) {
      console.error("Erreur:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Nouveau dossier médical
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prénom et nom de la mère
              </label>
              <input
                type="text"
                id="prenom_nom_mere"
                name="prenom_nom_mere"
                value={newDossier.prenom_nom_mere}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="prenom_nom_pere"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prénom et nom du père
              </label>
              <input
                type="text"
                id="prenom_nom_pere"
                name="prenom_nom_pere"
                value={newDossier.prenom_nom_pere}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="antecedant_fam"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Antécédents familiaux
              </label>
              <textarea
                id="antecedant_fam"
                name="antecedant_fam"
                value={newDossier.antecedant_fam}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="maladies_chroniques"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Maladies chroniques
              </label>
              <textarea
                id="maladies_chroniques"
                name="maladies_chroniques"
                value={newDossier.maladies_chroniques}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="allergies"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                value={newDossier.allergies}
                onChange={handleInputChange}
                rows="2"
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="traitements"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Traitements
              </label>
              <textarea
                id="traitements"
                name="traitements"
                value={newDossier.traitements}
                onChange={handleInputChange}
                rows="2"
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="id_patient"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ID du patient
              </label>
              <input
                type="number"
                id="id_patient"
                name="id_patient"
                value={newDossier.id_patient}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
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
