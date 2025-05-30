import CharacterList from "@/components/modular/About/CharacterList";

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="font-black text-4xl indent-[1em] text-neutral-800/70 mb-4">万物皆可师，处处可生趣</h1>
        <h1 className="font-black text-4xl text-center">你想...</h1>
        <CharacterList />
      </div>
    </div>
  );
}
