import EditBtn from "./EditBtn";
import InfoBtn from "./InfoBtn";
import DeleteBtn from "./DeleteBtn";

export default function OrdonnanceGabarit({
  ordonnance,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  console.log("Ordonnance reçue :", ordonnance);
  const { date_ordonnance, note, id_pharmacie } = ordonnance;

  return (
    <tr>
      <td className="px-4">{date_ordonnance}</td>
      <td className="px-4">{note}</td>
      <td className="px-4">{id_pharmacie}</td>

      <td>
        <InfoBtn patientId={ordonnance.id} onDetail={onDetail} />
        <EditBtn patientId={ordonnance.id} onModifier={onModifier} />
        <DeleteBtn patientId={ordonnance.id} onSupprimer={onSupprimer} />
      </td>
    </tr>
  );
}
