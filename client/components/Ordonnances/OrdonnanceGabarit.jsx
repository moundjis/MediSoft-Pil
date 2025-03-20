
export default function OrdonnanceGabarit({ ordonnance, onDetail }) {
    console.log("Ordonnance reçue :", ordonnance); // Vérifiez les données ici
    const { date_ordonnance, note,id_pharmacie   } = ordonnance;

    return (
        <tr>
            
            <td className="px-4">{date_ordonnance}</td>
            <td className="px-4">{note}</td>
            <td className="px-4">{id_pharmacie}</td>
            
            
            <td>
                <button onClick={onDetail}>Détails</button>
            </td>
        </tr>
    );
}