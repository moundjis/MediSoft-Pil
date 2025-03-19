import React from "react";

export default function InfoBtn({ id, onDetail }) {
  const handleDetail = () => {
    onDetail(id);
  };

  return (
    <button
      onClick={handleDetail}
      className="bg-gray-300 text-white p-1 rounded-md hover:bg-gray-700"
    >
      Infos
    </button>
  );
}
