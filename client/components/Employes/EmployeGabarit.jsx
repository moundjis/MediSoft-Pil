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
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{telephone}</td>
      <td>{titre}</td>
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
