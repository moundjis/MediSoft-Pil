"use client";

import Employee from "@/components/employee/Employee";
import { useState, useEffect } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]); // Liste des employés
  const [detail, setDetail] = useState(); // Détails de l'employé sélectionné
  const [error, setError] = useState(null); // Gestion des erreurs
  const [loading, setLoading] = useState(false); // Gestion de l'état de chargement

  useEffect(() => {
    GetAllEmployees();
  }, []);

  //============Functions===============//

  async function GetAllEmployees() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/employe");
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const employees = await response.json();
      setEmployees(employees.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function AfficheSelection(detail) {
    setDetail(detail);
  }

  async function DeleteEmployee(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/employe/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      setEmployees((prevEmployees) => prevEmployees.filter((e) => e.id !== id));
    } catch (error) {
      setError(error.message);
    }
  }

  //======================================//

  return (
    <div className="">
      <h2>Lists of employees</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Employee
              employee={employee}
              afficherSelection={AfficheSelection}
              deleteEmployee={DeleteEmployee}
            />
          </li>
        ))}
      </ul>
      <h2>Chosen one</h2>
      {detail && (
        <div>
          <span>{detail}</span>
          <button onClick={() => setDetail(null)}>Reset</button>
        </div>
      )}
    </div>
  );
}
