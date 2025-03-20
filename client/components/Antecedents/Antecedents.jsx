import antecedents from "@/public/data/antecedents.json";
export default function Antecedents() {
  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Antécedents médicaux
      </h1>
      <div className="h-full flex flex-col justify-around">
        {antecedents.map((antecedent) => (
          <p key={antecedent.id} className="font-semibold">
            {antecedent.name}
          </p>
        ))}
      </div>
    </div>
  );
}
