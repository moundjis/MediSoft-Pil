import React from "react";

export default function EditBtn({ id, onModifier }) {
  const handleEdit = () => {
    onModifier(id);
  };
  return (
    <button
      onClick={handleEdit}
      className="bg-green-300 text-white p-1 m-1 rounded-md hover:bg-green-700"
    >
      Modify
    </button>
  );
}
