import DeleteBtn from "@/components/Employes/DeleteBtn";
import EditBtn from "@/components/Employes/EditBtn";
import InfoBtn from "@/components/Employes/InfoBtn";

export default function EmployeGabarit({
  employe,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  const { nom, prenom, telephone, Role } = employe;
  const { titre } = Role;

  return (
    <>
      <td className="px-4">{nom}</td>
      <td className="px-4">{prenom}</td>
      <td className="px-4">{telephone}</td>
      <td className="px-4">{titre}</td>
      <td>
        {/* employeId c'est le meme props utilise dans comme props pour la focntion DeleteBtn.jsx */}
        {/* Bouton Détails */}
        <InfoBtn employeId={employe.id} onDetail={onDetail} />
        {/* Bouton Modifier */}
        <EditBtn employeId={employe.id} onModifier={onModifier} />
        {/* Bouton Supprimer */}
        <DeleteBtn employeId={employe.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
