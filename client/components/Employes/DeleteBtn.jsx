import React from "react";

export default function DeleteBtn({ employeId, onSupprimer }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      onSupprimer(employeId); // Appelle la fonction de suppression passée en prop
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-300 text-white p-1 rounded-md hover:bg-red-700"
    >
      Delete
    </button>
  );
}
