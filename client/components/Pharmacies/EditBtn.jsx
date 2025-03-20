"use client";
import { useState } from "react";
import React from "react";
import EditBtnForm from "@/components/Pharmacies/EditBtnForm";

export default function EditBtn() {
  const [showEditBtn, setEditBtn] = useState(false);

  return (
    <div>
      <button
        onClick={() => setEditBtn(true)}
        className="w-full bg-green-500 text-white p-1 my-1 rounded-md hover:bg-green-700"
      >
        Modifier
      </button>
      {showEditBtn && <EditBtnForm onClose={() => setEditBtn(false)} />}
    </div>
  );
}
