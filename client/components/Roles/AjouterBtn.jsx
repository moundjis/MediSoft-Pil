"use client";
import React, { useState } from "react";

export default function AjouterRoleBtn({ onClose }) {
  const [newRole, setNewRole] = useState({
    titre: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau role:", newRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter un nouveau role
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          ></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="titre"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Titre
              </label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={newRole.titre}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-xs text-black focus:outline-none"
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
