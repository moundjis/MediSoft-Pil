"use client";
import React, { useState } from "react";

export default function EditBtnForm({ onClose }) {
  const [showEditBtn, SetEditBtn] = useState(false);

  const [updateRDV, setUpdateRDV] = useState({
    date_rdv: new Date().toISOString().split("T")[0],
    heure_rdv: "",
    note_medecin: "",
    type_rdv: "",
    status_rdv: "",
    id_patient: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateRDV((prev) => ({
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
                Date du rendez-vous
              </label>
              <input
                type="date"
                id="date_rdv"
                name="date_rdv"
                onChange={handleInputChange}
                value={updateRDV.date_rdv}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Champ Heure du rendez-vous */}
            <div>
              <label
                htmlFor="heure_rdv"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Heure du rendez-vous
              </label>
              <input
                type="time"
                id="heure_rdv"
                name="heure_rdv"
                value={updateRDV.heure_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Champ Note du médecin */}
            <div>
              {/* Champ Note du médecin */}
              <label
                htmlFor="note_medecin"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Note du médecin
              </label>
              <textarea
                id="note_medecin"
                name="note_medecin"
                value={updateRDV.note_medecin}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Champ Type de rendez-vous */}
            <div>
              <label
                htmlFor="status_rdv"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Type de rendez-vous
              </label>
              <select
                id="type_rdv"
                name="type_rdv"
                value={updateRDV.type_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Statut du rendez-vous
              </label>
              <select
                id="status_rdv"
                name="status_rdv"
                value={updateRDV.status_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              <label
                htmlFor="id_patient"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                ID Patient
              </label>
              <input
                type="number"
                id="id_patient"
                name="id_patient"
                value={newRendezVous.id_patient}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
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
