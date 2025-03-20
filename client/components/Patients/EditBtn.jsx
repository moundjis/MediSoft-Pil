"use client";
import { useState } from "react";
import EditBtnForm from "@/components/patients/EditBtnForm";

export default function EditBtn({ patientId, onModifier, patient }) {
  const [showEditBtn, setEditBtn] = useState(false);

  const handleEditClick = () => {
    setEditBtn(true); // Afficher le formulaire
  };

  return (
    <div>
      <button
        onClick={handleEditClick}
        className="w-full bg-green-500 text-white p-1 my-1 rounded-md hover:bg-green-700"
      >
        Modifier
      </button>
      {showEditBtn && (
        <EditBtnForm
          patientId={patientId}
          patient={patient}
          onClose={() => setEditBtn(false)}
          onModifier={onModifier}
        />
      )}
    </div>
  );
}