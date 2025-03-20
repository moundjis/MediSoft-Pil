"use client";
import React, { useState } from "react";

export default function EditRdvForm({ onClose }) {
  const [updateRdv, setUpdateRdv] = useState({
    date_rdv: new Date().toISOString().split("T")[0],
    heure_rdv: "",
    type_rdv: "",
    status_rdv: "",
    id_patient: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateRdv((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Modifier le rendez-vous
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Date du rendez-vous
              </label>
              <input
                type="date"
                name="date_rdv"
                value={updateRdv.date_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Heure du rendez-vous
              </label>
              <input
                type="time"
                name="heure_rdv"
                value={updateRdv.heure_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Type de rendez-vous
              </label>
              <input
                type="text"
                name="type_rdv"
                value={updateRdv.type_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Statut du rendez-vous
              </label>
              <select
                name="status_rdv"
                value={updateRdv.status_rdv}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Sélectionnez le statut
                </option>
                <option value="confirmé">Confirmé</option>
                <option value="annulé">Annulé</option>
                <option value="en attente">En attente</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                ID Patient
              </label>
              <input
                type="text"
                name="id_patient"
                value={updateRdv.id_patient}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm text-sm text-black focus:ring-1 focus:ring-blue-500"
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
