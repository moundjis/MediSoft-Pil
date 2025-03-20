"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ConsultationGabarit from "./ConsultationGabarit";
import AjouterBtn from "@/components/Consultations/AjouterBtn";
import colonnes from "@/public/data/consultationColonnes";

export default function Consultations() {
  const [error, setError] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const consultationsPerPage = 10; // nombre de consultations par page

  useEffect(() => {
    GetAllConsultations();
  }, []);

  async function GetAllConsultations() {
    try {
      const response = await fetch("http://localhost:5000/api/consultation");
      if (!response.ok) {
        throw new Error("Failed to fetch consultations");
      }
      const consultations = await response.json();
      setConsultations(consultations.data);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  }

  const SupprimerConsultation = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/consultation/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete consultation");
      }

      setConsultations((prevConsultations) =>
        prevConsultations.filter((c) => c.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // Logique de pagination
  const indexOfLastConsultation = currentPage * consultationsPerPage;
  const indexOfFirstConsultation =
    indexOfLastConsultation - consultationsPerPage;
  const currentConsultations = consultations.slice(
    indexOfFirstConsultation,
    indexOfLastConsultation
  );
  const totalPages = Math.ceil(consultations.length / consultationsPerPage);

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
          Liste des consultations
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
            {currentConsultations.map((consultation) => (
              <tr key={consultation.id} className="border-b text-gray-500">
                <ConsultationGabarit
                  consultation={consultation}
                  onDetail={() => console.log("Detail de:", consultation)}
                  onModifier={() => console.log("Modifier:", consultation)}
                  onSupprimer={SupprimerConsultation}
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