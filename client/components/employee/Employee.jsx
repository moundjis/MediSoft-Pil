export default function Employee({
  employee,
  afficherSelection,
  deleteEmployee,
}) {
  const { id, nom, prenom, courriel, Role } = employee;
  const { titre, specialite } = Role;

  return (
    <div>
      <input
        type="radio"
        name="employee"
        value={id}
        onChange={() => afficherSelection(nom + ` ` + prenom)}
      />
      <span>Nom : {nom} </span>
      <span>Prenom : {prenom} </span>
      <span>Email : {courriel} </span>
      <span>Role : {titre} </span>
      {specialite && <span>Specialite : {specialite} </span>}
      <button
        onClick={() => {
          deleteEmployee(id);
        }}
      >
        &#10060;
      </button>
      <button
        onClick={() => {
          afficherSelection(nom + ` ` + prenom);
        }}
      >
        &#9999;
      </button>
    </div>
  );
}
