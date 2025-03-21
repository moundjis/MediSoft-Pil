"use client";
import React, { useState } from "react";
import InfosDossierMedical from "./InfosDossierMedical";

export default function InfoBtnOrdonnance({ id, onDetail }) {
  const [showInfoBtn, setInfoBtn] = useState(false);

  const handleDetail = () => {
    onDetail(id);
  };

  return (
    <div>
      <button
        onClick={() => setInfoBtn(true)}
        className="w-full bg-gray-500 text-white p-1 my-1 rounded-md hover:bg-gray-700"
      >
        Infos
      </button>
      {showInfoBtn && <InfosDossierMedical onClose={() => setInfoBtn(false)} />}
    </div>
  );
}
