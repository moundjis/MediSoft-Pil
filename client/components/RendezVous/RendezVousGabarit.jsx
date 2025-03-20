import DeleteBtn from "@/components/RendezVous/DeleteBtn";
import EditBtn from "@/components/RendezVous/EditBtn";
import InfoBtn from "@/components/RendezVous/InfoBtn";

export default function RendezVousGabarit({
  rendezVous,
  onSupprimer,
  onDetail,
  onModifier,
}) {
  console.log("Rendez Vous reçue :", rendezVous); // Vérifiez les données ici
  const { date_rdv, heure_rdv, type_rdv, status_rdv, Patient } = rendezVous;
  const { nom, prenom } = Patient;

  return (
    <>
      <td className="px-4">{date_rdv}</td>
      <td className="px-4">{heure_rdv}</td>
      <td className="px-4">{type_rdv}</td>
      <td className="px-4">{status_rdv}</td>
      <td className="px-4">{`${nom} ${prenom}`}</td>

      <td>
        {/* rendezVousId c'est le meme props utilise dans comme props pour la focntion DeleteBtn.jsx */}
        {/* Bouton Détails */}
        <InfoBtn rendezVousId={rendezVous.id} onDetail={onDetail} />
        {/* Bouton Modifier */}
        <EditBtn rendezVousId={rendezVous.id} onModifier={onModifier} />
        {/* Bouton Supprimer */}
        <DeleteBtn rendezVousId={rendezVous.id} onSupprimer={onSupprimer} />
      </td>
    </>
  );
}
