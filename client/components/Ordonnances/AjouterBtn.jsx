"use client";
import React, { useState, useEffect } from "react";

export default function AjouterBtn({ onClose }) {
  // État pour stocker les données du formulaire
  const [newOrdonnance, setNewOrdonnance] = useState({
    date_ordonnance: new Date().toISOString().split("T")[0], // Date par défaut
    note: "", // Note ou instructions
    id_pharmacie: "", // ID de la pharmacie
  });

  // État pour stocker la liste des pharmacies
  const [pharmacies, setPharmacies] = useState([]);

  // Récupère la liste des pharmacies au chargement de la page
  useEffect(() => {
    getAllPharmacies();
  }, []);

  // Fonction pour récupérer toutes les pharmacies
  async function getAllPharmacies() {
    try {
      // Envoi de la requête pour obtenir les pharmacies
      const response = await fetch("http://localhost:5000/api/pharmacie");
      if (!response.ok) {
        throw new Error("Failed to fetch pharmacies");
      }
      const data = await response.json();
      setPharmacies(data.data); // Mise à jour de la liste des pharmacies
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

  // Gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convertir id_pharmacie en nombre si nécessaire
    const updatedValue =
      name === "id_pharmacie" ? parseInt(value, 10) : value;

    setNewOrdonnance((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nouvelle ordonnance:", newOrdonnance);

    try {
      // Envoyer les données à l'API
      const response = await fetch("http://localhost:5000/api/ordonnance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrdonnance),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de l'ordonnance");
      }

      const data = await response.json();
      console.log("Ordonnance ajoutée avec succès:", data);

      // Fermer le formulaire
      onClose();

      // Rafraîchir la page pour afficher la nouvelle ordonnance
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
            Nouvelle ordonnance
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
            {/* Champ : Date de l'ordonnance */}
            <div>
              <label
                htmlFor="date_ordonnance"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date de l'ordonnance
              </label>
              <input
                type="date"
                id="date_ordonnance"
                name="date_ordonnance"
                value={newOrdonnance.date_ordonnance}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              />
            </div>

            {/* Champ : Note ou instructions */}
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Note ou instructions
              </label>
              <textarea
                id="note"
                name="note"
                value={newOrdonnance.note}
                onChange={handleInputChange}
                rows="3"
                className="w-full rounded-md border-gray-500 text-black text-sm shadow-sm focus:outline-none resize-none"
                required
              />
            </div>

            {/* Champ : Sélection de la pharmacie */}
            <div>
              <label
                htmlFor="id_pharmacie"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sélectionner une pharmacie
              </label>
              <select
                id="id_pharmacie"
                name="id_pharmacie"
                value={newOrdonnance.id_pharmacie}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-500 shadow-sm text-sm text-black focus:outline-none"
                required
              >
                <option value="">Choisir une pharmacie</option>
                {pharmacies.map((pharmacie) => (
                  <option key={pharmacie.id} value={pharmacie.id}>
                    {pharmacie.nom} {/* Supposons que le nom de la pharmacie est dans `pharmacie.nom` */}
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