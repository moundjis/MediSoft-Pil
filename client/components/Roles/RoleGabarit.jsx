// Composant RoleGabarit qui reçoit un objet role
export default function RoleGabarit({ role }) {
  const { titre, employes } = role; // Utilisation de "employes" pour récupérer la liste des employés

  return (
    <>
      <td>{titre}</td>
      <td>
        {employes && employes.length > 0 ? (
          employes.map((emp, id) => (
            <div key={id} className="mb-2">
              {/* Utilisation de <div> pour chaque employé sur une ligne différente */}
              {emp.nom} {emp.prenom}
            </div>
          ))
        ) : (
          <span className="text-gray-500">Aucun employé</span>
        )}
      </td>
    </>
  );
}
