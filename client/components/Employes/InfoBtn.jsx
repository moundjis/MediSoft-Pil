import React from "react";

export default function InfoBtn({ id, onDetail }) {
  const handleDetail = () => {
    onDetail(id);
  };

  return (
    <button
      onClick="./infosEmploye.jsx"
      className="w-full bg-gray-500 text-white p-1 my-1 rounded-md hover:bg-gray-700"
    >
      Infos
    </button>
  );
}
