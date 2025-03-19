export default function PatientGabarit({ patient, onDetail }) {
    console.log("Patient reçu :", patient); // Vérifiez les données ici
    const { nom, prenom, courriel, telephone, adresse } = patient;
  
    return (
      <tr>
        <td className="px-4">{nom}</td>
        <td className="px-4">{prenom}</td>
        <td className="px-4">{courriel}</td>
        <td className="px-4">{telephone}</td>
        <td className="px-4">{adresse}</td>
        <td>
          <button onClick={onDetail}>Détails</button>
        </td>
      </tr>
    );
  }