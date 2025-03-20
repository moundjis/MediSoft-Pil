"use client";
import React, { useState } from "react";

export default function AjouterPatientBtn({ onClose }) {
  // État pour stocker les informations du nouveau patient
  const [newPatient, setNewPatient] = useState({
    nom: "",
    prenom: "",
    date_de_naissance: new Date().toISOString().split("T")[0],
    courriel: "",
    telephone: "",
    adresse: "",
  });

  // Gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouveau patient:", newPatient);

    try {
      // Envoi des données du patient à l'API
      const response = await fetch("http://localhost:5000/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient), // Envoie les données sous forme JSON
      });

      // Vérification de la réponse de l'API
      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du patient");
      }

      const data = await response.json();
      console.log("Patient ajouté avec succès:", data);

      // Fermer le formulaire
      onClose();

      // Rafraîchir la page pour afficher le nouveau patient
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
            Nouveau patient
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
            {/* Champ Nom */}
            <div>
              <label
                htmlFor="nom"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={newPatient.nom}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Prénom */}
            <div>
              <label
                htmlFor="prenom"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={newPatient.prenom}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Date de naissance */}
            <div>
              <label
                htmlFor="dateNaissance"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date de naissance
              </label>
              <input
                type="date"
                id="date_de_naissance"
                name="date_de_naissance"
                value={newPatient.date_de_naissance}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>

            {/* Champ Numéro de téléphone */}
            <div>
              <label
                htmlFor="numeroTelephone"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Numéro de téléphone
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                pattern="[0-9]{10}"
                value={newPatient.telephone}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Courriel */}
            <div>
              <label
                htmlFor="courriel"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Courriel
              </label>
              <input
                type="email"
                id="courriel"
                name="courriel"
                value={newPatient.courriel}
                onChange={handleInputChange}
                className="w-full rounded-md shadow-sm text-sm text-black border-gray-500 focus:outline-none"
                required
              />
            </div>

            {/* Champ Adresse */}
            <div>
              <label
                htmlFor="adresse"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={newPatient.adresse}
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
