// Composant Employee qui reçoit un objet employee comme prop
export default function EmployeGabarit({ employe }) {
  // Extraction des propriétés de l'objet employee
  const {
    id,
    nom,
    prenom,
    date_de_naissance,
    nas,
    courriel,
    telephone,
    adresse,
    Role,
  } = employe;
  const { titre, specialite } = Role;

  return (
    <>
      {/* Affichage du titre du rôle de l'employé */}
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{date_de_naissance}</td>
      <td>{nas}</td>
      <td>{courriel}</td>
      <td>{telephone}</td>
      <td>{adresse}</td>
      <td>{titre}</td>
      {/* Si la spécialité est présente, l'afficher */}
      {specialite && <td>Specialite : {specialite} </td>}
    </>
  );
}
