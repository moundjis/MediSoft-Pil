"use client";
import React, { useState, useEffect } from "react";
import PatientGabarit from "./PatientGabarit";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import AjouterBtn from "@/components/Patients/AjouterBtn";
import patientColonne from "@/public/data/patientColonne";

export default function Patients() {
  const [error, setError] = useState(null);
  const [patients, setPatients] = useState([]);
  const [showAjouterBtn, setAjouterBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;

  useEffect(() => {
    GetAllPatients();
  }, []);

  async function GetAllPatients() {
    try {
      const response = await fetch("http://localhost:5000/api/patient");
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      const patients = await response.json();
      setPatients(patients.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  const SupprimerPatient = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/patient/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message.includes("consultation")) {
          setError("use client: Ce patient ne peut pas être supprimé car il a déjà une consultation.");
        } else {
          throw new Error("Failed to delete patient");
        }
        return;
      }
  
      setPatients((prevPatients) => prevPatients.filter((e) => e.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );
  const totalPages = Math.ceil(patients.length / patientsPerPage);

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
          Liste des patients
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
              {patientColonne.map((colonne) => (
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
            {currentPatients.map((patient) => (
              <tr key={patient.id} className="border-b text-gray-500">
                <PatientGabarit patient={patient}
                onSupprimer={SupprimerPatient} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* cpntrole pagination */}
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
