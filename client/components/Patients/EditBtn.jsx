"use client";
import { useState } from "react";
import React from "react";
import EditBtnForm from "@/components/patients/EditBtnForm";

export default function EditBtn({ patientId, onModifier }) {
  const [showEditBtn, setEditBtn] = useState(false);

  return (
    <div>
      <button
        onClick={() => setEditBtn(true)}
        className="w-full bg-green-500 text-white p-1 my-1 rounded-md hover:bg-green-700"
      >
        Modifier
      </button>
      {showEditBtn && (
        <EditBtnForm
          patientId={patientId} // Passer l'ID du patient
          onClose={() => setEditBtn(false)} // Fermer le formulaire
          onModifier={onModifier} // Appeler après la mise à jour
        />
      )}
    </div>
  );
}