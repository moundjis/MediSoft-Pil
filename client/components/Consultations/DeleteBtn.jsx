import React from "react";

export default function DeleteBtn({ consultationId, onSupprimer }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this consultation?")) {
      onSupprimer(consultationId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="w-full bg-red-500 text-white p-1 my-1 rounded-md hover:bg-red-700"
    >
      Supprimer
    </button>
  );
}