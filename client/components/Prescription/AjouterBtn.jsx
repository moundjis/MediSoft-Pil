"use client";
import React, { useState } from "react";

export default function AjouterBtn({ onClose }) {
  const [newPrescription, setNewPrescription] = useState({
    date: new Date().toISOString().split("T")[0],
    medicament: "",
    dosage: "",
    quantite: 0,
    note_medecin: "",
    renouvellement: false,
    id_ordonnance: "", // Champ visible pour l'ID de l'ordonnance
    id_consultation: "", // Champ visible pour l'ID de la consultation
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Gestion spéciale pour les champs booléens ou numériques
    const updatedValue =
      name === "renouvellement"
        ? value === "true"
        : name === "quantite" || name === "id_ordonnance" || name === "id_consultation"
        ? parseInt(value, 10)
        : value;

    setNewPrescription((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouvelle prescription:", newPrescription);

    try {
      // Envoyer les données à l'API
      const response = await fetch("http://localhost:5000/api/prescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrescription),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de la prescription");
      }

      const data = await response.json();
      console.log("Prescription ajoutée avec succès:", data);

      // Fermer le formulaire
      onClose();

      // Rafraîchir la page pour afficher la nouvelle prescription
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
            Nouvelle prescription
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
            {/* Champ ID Ordonnance */}
            <div>
              <label
                htmlFor="id_ordonnance"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                ID Ordonnance
              </label>
              <input
                type="number"
                id="id_ordonnance"
                name="id_ordonnance"
                value={newPrescription.id_ordonnance}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ ID Consultation */}
            <div>
              <label
                htmlFor="id_consultation"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                ID Consultation
              </label>
              <input
                type="number"
                id="id_consultation"
                name="id_consultation"
                value={newPrescription.id_consultation}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Médicament */}
            <div>
              <label
                htmlFor="medicament"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Médicament
              </label>
              <input
                type="text"
                id="medicament"
                name="medicament"
                value={newPrescription.medicament}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Dosage */}
            <div>
              <label
                htmlFor="dosage"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Dosage
              </label>
              <input
                type="text"
                id="dosage"
                name="dosage"
                value={newPrescription.dosage}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Quantité */}
            <div>
              <label
                htmlFor="quantite"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Quantité
              </label>
              <input
                type="number"
                id="quantite"
                name="quantite"
                value={newPrescription.quantite}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Note du médecin */}
            <div>
              <label
                htmlFor="note_medecin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Note du médecin
              </label>
              <textarea
                id="note_medecin"
                name="note_medecin"
                value={newPrescription.note_medecin}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 text-black text-sm shadow-sm focus:outline-none resize-none"
              />
            </div>

            {/* Champ Renouvellement */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Renouvellement
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="renouvellement"
                    value={true}
                    checked={newPrescription.renouvellement === true}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-black">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="renouvellement"
                    value={false}
                    checked={newPrescription.renouvellement === false}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-black">Non</span>
                </label>
              </div>
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