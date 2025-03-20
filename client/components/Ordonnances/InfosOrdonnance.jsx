import ordonnances from "@/public/data/ordonnances.json";

export default function InfosOrdonnance() {
  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Détails de l'ordonnance
      </h1>
      <div className="h-full flex flex-col justify-around">
        {ordonnances.map((details) => (
          <p key={details.id} className="font-semibold">
            {details.name}
          </p>
        ))}
      </div>
    </div>
  );
}
