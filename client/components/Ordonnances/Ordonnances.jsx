"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import OrdonnanceGabarit from "./OrdonnanceGabarit";
import AjouterBtn from "@/components/Ordonnances/AjouterBtn";
import ordonnanceColonnes from "@/public/data/ordonnanceColonnes.json";

export default function Ordonnances() {
  const [error, setError] = useState(null);
  const [ordonnances, setOrdonnances] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ordonnancesPerPage = 10; // nombre d'ordonnances par page

  useEffect(() => {
    GetAllOrdonnances();
  }, []);

  async function GetAllOrdonnances() {
    try {
      const response = await fetch("http://localhost:5000/api/ordonnance");
      if (!response.ok) {
        throw new Error("Failed to fetch ordonnances");
      }
      const ordonnances = await response.json();
      setOrdonnances(ordonnances.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const SupprimerOrdonnance = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/ordonnance/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete ordonnance");
      }

      setOrdonnances((prevOrdonnances) =>
        prevOrdonnances.filter((o) => o.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Logique de pagination
  const indexOfLastOrdonnance = currentPage * ordonnancesPerPage;
  const indexOfFirstOrdonnance = indexOfLastOrdonnance - ordonnancesPerPage;
  const currentOrdonnances = ordonnances.slice(
    indexOfFirstOrdonnance,
    indexOfLastOrdonnance
  );
  const totalPages = Math.ceil(ordonnances.length / ordonnancesPerPage);

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
          Liste des ordonnances
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
              {ordonnanceColonnes.map((colonne) => (
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
            {currentOrdonnances.map((ordonnance) => (
              <tr key={ordonnance.id} className="border-b text-gray-500">
                <OrdonnanceGabarit
                  ordonnance={ordonnance}
                  onDetail={() => console.log("Detail de:", ordonnance)}
                  onModifier={() => console.log("Modifier:", ordonnance)}
                  onSupprimer={SupprimerOrdonnance}
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
