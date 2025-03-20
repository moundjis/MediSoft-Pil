import React from "react";
import InfoBtn from "./InfoBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

export default function RendezVousGabarit({
  rendezVou,
  onDetail,
  onModifier,
  onSupprimer,
}) {
  console.log("Rendez Vous reçue :", rendezVou); // Vérifiez les données ici
  const { date_rdv, heure_rdv, type_rdv, status_rdv, id_patient } = rendezVou;

  return (
    <>
      <td className="px-4">{date_rdv}</td>
      <td className="px-4">{heure_rdv}</td>
      <td className="px-4">{type_rdv}</td>
      <td className="px-4">{status_rdv}</td>
      <td className="px-4">{id_patient}</td>
      <td>
        <InfoBtn employeId={rendezVou.id} onDetail={onDetail} />
        <EditBtn employeId={rendezVou.id} onModifier={onModifier} />
        <DeleteBtn employeId={rendezVou.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
