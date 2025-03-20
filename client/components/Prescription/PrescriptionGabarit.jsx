import React from "react";
import InfoBtn from "./InfoBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

export default function PrescriptionGabarit({
  prescription,
  onDetail,
  onModifier,
  onSupprimer,
}) {
  console.log("prescription reçue :", prescription); // Vérifiez les données ici
  const { medicament, dosage, quantite, note_medecin } = prescription;

  return (
    <>
      <td className="px-4">{medicament}</td>
      <td className="px-4">{dosage}</td>
      <td className="px-4">{quantite}</td>
      <td className="px-4">{note_medecin}</td>

      <td>
        <InfoBtn prescriptionId={prescription.id} onDetail={onDetail} />
        <EditBtn prescriptionId={prescription.id} onModifier={onModifier} />
        <DeleteBtn prescriptionId={prescription.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
