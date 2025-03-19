export default function EmployeColonnes({ employe }) {
  const { nom, prenom, telephone, Role } = employe;
  const { titre } = Role;

  return (
    <>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{telephone}</td>
      <td>{titre}</td>
    </>
  );
}
