export default function ConnexionForm() {
  return (
    <main>
      <form action="" className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="E-mail"
          className="border-b-1 border-white/50 text-white p-1 placeholder-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border-b-1 border-white/50 text-white p-1 placeholder-white focus:outline-none"
        />
        <button className="bg-blue-400 p-2 rounded-md drop-shadow-[5px_6px_6px_rgba(0,0,0,0.5)] self-end hover:cursor-pointer w-[150px]">
          Se connecter
        </button>
      </form>
    </main>
  );
}
