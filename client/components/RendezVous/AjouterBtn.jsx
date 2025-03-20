"use client";
import React, { useState, useEffect } from "react";

export default function AjouterBtn({ onClose }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/patient")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Erreur:", error));
  }, []);
  // État initial pour un nouveau rendez-vous
  const [newRendezVous, setNewRendezVous] = useState({
    date_rdv: new Date().toISOString().split("T")[0],
    heure_rdv: "00:00",
    note_medecin: "",
    type_rdv: "consultation",
    status_rdv: "en attente",
    id_patient: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewRendezVous((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouveau RDV:", newRendezVous);

    try {
      const response = await fetch("http://localhost:5000/api/rendez-vous", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRendezVous), // Envoie les données sous forme JSON
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du RDV");
      }

      const data = await response.json();
      console.log("RDV ajouté avec succès:", data);

      // Optionnel: Fermer le formulaire ou réinitialiser le formulaire
      onClose();
      // Rafraîchir la page
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
            Nouveau rendez-vous
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          {/* Champ Date du rendez-vous */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="date_rdv"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Date du rendez-vous
              </label>
              <input
                type="date"
                id="date_rdv"
                name="date_rdv"
                value={newRendezVous.date_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Heure du rendez-vous */}
            <div>
              <label
                htmlFor="heure_rdv"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Heure du rendez-vous
              </label>
              <input
                type="time"
                id="heure_rdv"
                name="heure_rdv"
                value={newRendezVous.heure_rdv}
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
                value={newRendezVous.note_medecin}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 text-black text-sm shadow-sm focus:outline-none resize-none"
              />
            </div>

            {/* Champ Type de rendez-vous */}
            <div>
              <label
                htmlFor="type_rdv"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Type de rendez-vous
              </label>
              <select
                id="type_rdv"
                name="type_rdv"
                value={newRendezVous.type_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              >
                <option value="consultation">Consultation</option>
                <option value="suivi">Suivi</option>
                <option value="urgence">Urgence</option>
              </select>
            </div>

            {/* Champ Statut du rendez-vous */}
            <div>
              <label
                htmlFor="status_rdv"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Statut du rendez-vous
              </label>
              <select
                id="status_rdv"
                name="status_rdv"
                value={newRendezVous.status_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              >
                <option value="en attente">En attente</option>
                <option value="confirmé">Confirmé</option>
                <option value="annulé">Annulé</option>
                <option value="terminé">Terminé</option>
              </select>
            </div>

            {/* Champ ID Patient (à remplacer par une liste déroulante dynamique si nécessaire) */}
            <div>
              <select
                id="id_patient"
                name="id_patient"
                value={newRendezVous.id_patient || ""}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Sélectionnez un patient
                </option>
                {patients.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.nom} {patient.prenom}
                  </option>
                ))}
              </select>
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
