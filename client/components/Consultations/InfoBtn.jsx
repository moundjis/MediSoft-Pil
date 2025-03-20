"use client";
import React, { useState } from "react";
import InfosConsultation from "./InfosConsultation";

export default function InfoBtn({ consultationId, onDetail }) {
  const [showInfoBtn, setInfoBtn] = useState(false);

  const handleDetail = () => {
    onDetail(consultationId); // Appelle la fonction onDetail avec l'ID de la consultation
    setInfoBtn(true); // Affiche le composant InfosConsultation
  };

  return (
    <div>
      <button
        onClick={handleDetail}
        className="w-full bg-gray-500 text-white p-1 my-1 rounded-md hover:bg-gray-700"
      >
        Infos
      </button>
      {showInfoBtn && <InfosConsultation onClose={() => setInfoBtn(false)} />}
    </div>
  );
}