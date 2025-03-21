import React from "react";

export default function DeleteBtn({ rendezVousId, onSupprimer }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      onSupprimer(rendezVousId); // Appelle la fonction de suppression passée en prop
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
