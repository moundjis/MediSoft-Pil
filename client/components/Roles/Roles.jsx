"use client";
import colonnes from "@/public/data/rolesColonnes";
import { useState, useEffect } from "react";
import RoleColonnes from "./RoleColonnes";
import AjouterBtn from "../Roles/AjouterBtn";

export default function Roles() {
  const [roles, setRoles] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);

  // Récupère la liste des roles au chargement de la page
  useEffect(() => {
    GetAllRoles();
  }, []);

  //============Functions===============//

  // Fonction pour récupérer tous les roles
  async function GetAllRoles() {
    try {
      // Envoi de la requête pour obtenir les roles
      const response = await fetch("http://localhost:5000/api/role");
      if (!response.ok) {
        throw new Error("Failed to fetch roles");
      }
      const roles = await response.json();
      setRoles(roles.data); // Mise à jour de la liste des roles
      console.log("Ceci est la liste des roles :", roles.data);
    } catch (error) {
      console.error("Error:", error.message); // Affichage d'une erreur si échec
    }
  }
  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">Liste des roles</h1>
      <button className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600">
        Ajouter
      </button>
      <table className="w-full">
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
          {/* Liste des roles */}

          {roles.map((role) => (
            <tr className="text-gray-400" key={role.id}>
              {/* Affichage de chaque employé avec le composant Employee */}
              <RoleColonnes
                role={role} // Passage des données du role
              />
            </tr>
          ))}
        </tbody>
      </table>
      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
