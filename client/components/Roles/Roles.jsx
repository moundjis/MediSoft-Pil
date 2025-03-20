"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import RoleGabarit from "./RoleGabarit";
import AjouterBtn from "./AjouterBtn";
import RolesColonnes from "@/public/data/rolesColonnes";

export default function Roles() {
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rolesPerPage = 10; // nombre de role par page

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

  const SupprimerRole = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/role/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete role");
      }

      setRoles((prevRoles) => prevRoles.filter((e) => e.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  // logique pagination
  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = roles.slice(indexOfFirstRole, indexOfLastRole);
  const totalPages = Math.ceil(roles.length / rolesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl text-black py-2">Liste des roles</h1>
        <button
          className="text-white text-sm bg-blue-400 px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => setAjouterBtn(true)}
        >
          Ajouter
        </button>
      </div>

      <div className="flex-grow overflow-auto">
        <table className="w-full table-fixed">
          <thead className="sticky top-0">
            <tr className="bg-yellow-400">
              {RolesColonnes.map((colonne) => (
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

            {currentRoles.map((role) => (
              <tr key={role.id} className="border-b text-gray-500">
                {/* Affichage de chaque employé avec le composant Employee */}
                <RoleGabarit
                  role={role}
                  onDetail={() => console.log("Detail de:", employe)}
                  onModifier={() => console.log("Modifier:", employe)}
                  onSupprimer={SupprimerRole}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* controle de pages*/}
      <div className="flex justify-between items-center mt-4 px-4 py-2 border-t">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          <LuChevronLeft className="w-4 h-4 mr-2" />
          Précédent
        </button>
        <span className="text-gray-600">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Suivant
          <LuChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {showAjouterBtn && <AjouterBtn onClose={() => setAjouterBtn(false)} />}
    </div>
  );
}
