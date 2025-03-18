"use client";
import { useState, useEffect } from "react";
import colonnes from "@/public/data/employesColonnes";
import EmployeGabarit from "@/components/Employes/EmployeGabarit";
import Action from "@/components/Employes/Action";
import AjouterBtn from "@/components/Employes/AjouterBtn";

export default function Employes() {
  const [employes, setEmployes] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);

  // Récupère la liste des employés au chargement de la page
  useEffect(() => {
    GetAllEmployes();
  }, []);

  //============Functions===============//

  // Fonction pour récupérer tous les employés
  async function GetAllEmployes() {
    try {
      // Envoi de la requête pour obtenir les employés
      const response = await fetch("http://localhost:5000/api/employe");
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const employes = await response.json();
      setEmployes(employes.data); // Mise à jour de la liste des employés
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">Liste des employes</h1>
      <button
        className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600"
        onClick={() => setAjouterBtn(true)}
      >
        Ajouter
      </button>
      <table className="w-full ">
        <thead>
          <tr className="bg-yellow-400">
            {colonnes.map((colonne) => (
              <th
                key={colonne.id}
                className="px-4 py-3 text-left text-sm font-medium text-white border border-3"
              >
                {colonne.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Liste des employés */}

          {employes.map((employe) => (
            <tr className="text-gray-400" key={employe.id}>
              {/* Affichage de chaque employé avec le composant Employee */}
              <EmployeGabarit
                employe={employe} // Passage des données de l'employé
              />
              <Action />
            </tr>
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
