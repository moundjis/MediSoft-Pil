import ConnexionForm from "./ConnexionForm";
import logo from "@/public/images/medisoft-logo.png";
import bgImg from "@/public/images/Medisoft-bg.png";

export default function Accueil() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 to-white flex justify-around">
      <div className="flex flex-col gap-30 z-1 w-full m-10">
        <img src={logo.src} alt="Logo" className="mt-5 w-1/3" />
        <ConnexionForm />
      </div>

      <img src={bgImg.src} alt="image de fond" className="w-2/3 z-0" />
    </div>
  );
}
