"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import PharmacieGabarit from "./PharmacieGabarit";
import AjouterBtn from "@/components/Pharmacies/AjouterBtn";
import colonnes from "@/public/data/pharmacieColonnes";

export default function Pharmacies() {
  const [error, setError] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pharmaciesPerPage = 10; // Nombre de pharmacies par page

  useEffect(() => {
    GetAllPharmacies();
  }, []);

  async function GetAllPharmacies() {
    try {
      const response = await fetch("http://localhost:5000/api/pharmacie");
      if (!response.ok) {
        throw new Error("Échec de la récupération des pharmacies");
      }
      const data = await response.json();
      setPharmacies(data.data);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  }

  const SupprimerPharmacie = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/pharmacie/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Échec de la suppression de la pharmacie");
      }

      setPharmacies((prevPharmacies) =>
        prevPharmacies.filter((pharmacie) => pharmacie.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Logique de pagination
  const indexOfLastPharmacie = currentPage * pharmaciesPerPage;
  const indexOfFirstPharmacie = indexOfLastPharmacie - pharmaciesPerPage;
  const currentPharmacies = pharmacies.slice(
    indexOfFirstPharmacie,
    indexOfLastPharmacie
  );
  const totalPages = Math.ceil(pharmacies.length / pharmaciesPerPage);

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
        <h1 className="font-bold text-2xl text-black py-2">
          Liste des pharmacies
        </h1>
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
            {currentPharmacies.map((pharmacie) => (
              <tr key={pharmacie.id} className="border-b text-gray-500">
                <PharmacieGabarit
                  pharmacie={pharmacie}
                  onDetail={() => console.log("Détail de:", pharmacie)}
                  onModifier={() => console.log("Modifier:", pharmacie)}
                  onSupprimer={SupprimerPharmacie}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contrôle de pagination */}
      <div className="flex justify-between items-center mt-4 px-4 py-2 border-t">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
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
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
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
