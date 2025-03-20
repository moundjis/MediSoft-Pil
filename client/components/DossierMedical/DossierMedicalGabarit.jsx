import EditBtn from "./EditBtn";
import InfoBtn from "./InfoBtn";
import DeleteBtn from "./DeleteBtn";

export default function DossierMedicalGabarit({
  dossier,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  console.log("Dossier médical reçu :", dossier);
  const { id, id_patient, nom_patient } = dossier;

  return (
    <>
      <td className="px-4">{id}</td>
      <td className="px-4">{id_patient}</td>
      <td className="px-4">{nom_patient}</td>

      <td>
        <InfoBtn patientId={id_patient} onDetail={onDetail} />
        <EditBtn patientId={id_patient} onModifier={onModifier} />
        <DeleteBtn patientId={id_patient} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
