import React from "react";
import InfoBtn from "./InfoBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

export default function PharmacieGabarit({
  pharmacie,
  onDetail,
  onModifier,
  onSupprimer,
}) {
  console.log("Pharmacie reçue :", pharmacie); // Vérifiez les données ici
  const { nom, adresse, telephone, email } = pharmacie;

  return (
    <>
      <td className="px-4">{nom}</td>
      <td className="px-4">{adresse}</td>
      <td className="px-4">{telephone}</td>
      <td className="px-4">{email}</td>

      <td>
        <InfoBtn employeId={pharmacie.id} onDetail={onDetail} />
        <EditBtn employeId={pharmacie.id} onModifier={onModifier} />
        <DeleteBtn employeId={pharmacie.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
