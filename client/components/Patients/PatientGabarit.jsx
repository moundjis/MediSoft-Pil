import DeleteBtn from "@/components/Patients/DeleteBtn";
import EditBtn from "@/components/Patients/EditBtn";
import InfoBtn from "@/components/Patients/InfoBtn";

export default function PatientGabarit({
  patient,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  console.log("Patient reçu :", patient); // Vérifiez les données ici
  const { nom, prenom, courriel, telephone, adresse } = patient;

  return (
    <>
      <td className="px-4">{nom}</td>
      <td className="px-4">{prenom}</td>
      <td className="px-4">{courriel}</td>
      <td className="px-4">{telephone}</td>
      <td className="px-4">{adresse}</td>
      <td>
        <InfoBtn patientId={patient.id} onDetail={onDetail} />
        <EditBtn patientId={patient.id} onModifier={onModifier} />
        <DeleteBtn patientId={patient.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
