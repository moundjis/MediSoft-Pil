import React from "react";
import EditBtn from "./EditBtn";
import InfoBtn from "./InfoBtn";
import DeleteBtn from "./DeleteBtn";

export default function ConsultationGabarit({
  consultation,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  console.log("Consultation reçue :", consultation); // Vérifiez les données ici
  const { diagnostic, note, recommendations } = consultation;

  return (
    <>
      <td className="px-4 py-3 text-left text-sm border-b">{diagnostic}</td>
      <td className="px-4 py-3 text-left text-sm border-b">{note}</td>
      <td className="px-4 py-3 text-left text-sm border-b">
        {recommendations}
      </td>
      <td>
        <InfoBtn patientId={consultation.id} onDetail={onDetail} />
        <EditBtn patientId={consultation.id} onModifier={onModifier} />
        <DeleteBtn consultationId={consultation.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}