"use client";

import React, { useState } from "react";
import InfosRDV from "./InfosRDV";

export default function InfoBtn({ id, onDetail }) {
  const handleDetail = () => {
    onDetail(id);
  };

  const [showInfoBtn, setInfoBtn] = useState(false);

  return (
    <div>
      <button
        onClick={() => setInfoBtn(true)}
        className="w-full bg-gray-500 text-white p-1 my-1 rounded-md hover:bg-gray-700"
      >
        Infos
      </button>
      {showInfoBtn && <InfosRDV onClose={() => setInfoBtn(false)} />}
    </div>
  );
}
