import DeleteBtn from "@/components/Roles/DeleteBtn";
import EditBtn from "@/components/Roles/EditBtn";
import InfoBtn from "@/components/Roles/InfoBtn";
// Composant RoleGabarit qui reçoit un objet role
export default function RoleGabarit({
  role,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  const { titre, employes } = role; // Utilisation de "employes" pour récupérer la liste des employés

  return (
    <>
      <td>{titre}</td>
      <td>
        {employes && employes.length > 0 ? (
          employes.map((employe, id) => (
            <div key={id} className="mb-2">
              {/* Utilisation de <div> pour chaque employé sur une ligne différente */}
              {employe.nom} {employe.prenom}
            </div>
          ))
        ) : (
          <span className="text-gray-500">Aucun employé</span>
        )}
      </td>
      <td>
        {/* Boutons liés au rôle */}
        <InfoBtn roleId={role.id} onDetail={onDetail} />
        <EditBtn roleId={role.id} onModifier={onModifier} />
        <DeleteBtn roleId={role.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
