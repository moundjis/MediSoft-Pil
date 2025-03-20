"use client";
import React, { useState } from "react";

export default function AjouterBtn({ onClose }) {
  const [newConsultation, setNewConsultation] = useState({
    date: new Date().toISOString().split("T")[0],
    diagnostic: "",
    note: "",
    recommendation: "",
    patientName: "", 
    employeName: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConsultation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouvelle consultation:", newConsultation);

    try {
      // Envoi des données de la consultation à l'API
      const response = await fetch("http://localhost:5000/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConsultation), // Envoie les données sous forme JSON
      });

      // Vérification de la réponse de l'API
      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de la consultation");
      }

      const data = await response.json();
      console.log("Consultation ajoutée avec succès:", data);

      // Fermer le formulaire
      onClose();

      // Rafraîchir la page pour afficher la nouvelle consultation
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
            Nouvelle consultation
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
            {/* Champ Date */}
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
                value={newConsultation.date}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>

            {/* Champ Diagnostic */}
            <div>
              <label
                htmlFor="diagnostic"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Diagnostic
              </label>
              <input
                type="text"
                id="diagnostic"
                name="diagnostic"
                value={newConsultation.diagnostic}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Note */}
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Note
              </label>
              <textarea
                id="note"
                name="note"
                value={newConsultation.note}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 text-black text-sm shadow-sm focus:outline-none resize-none"
              />
            </div>

            {/* Champ Recommendation */}
            <div>
              <label
                htmlFor="recommendation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Recommendation
              </label>
              <textarea
                id="recommendation"
                name="recommendation"
                value={newConsultation.recommendation}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 shadow-sm focus:outline-none text-black text-sm resize-none"
              />
            </div>

            {/* Champ Nom du patient */}
            <div>
              <label
                htmlFor="patientName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom du patient
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={newConsultation.patientName}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Nom de l'employé */}
            <div>
              <label
                htmlFor="employeName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom de l'employé
              </label>
              <input
                type="text"
                id="employeName"
                name="employeName"
                value={newConsultation.employeName}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Boutons Annuler et Ajouter */}
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
