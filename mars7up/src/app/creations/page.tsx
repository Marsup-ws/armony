import { musiques } from "@/data/musiques";
import MusicCard from "@/components/MusicCard";

export default function NosCreationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <h1 className="font-display text-5xl text-[#cc0000] tracking-widest mb-10 red-glow text-center">
        Nos Créations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musiques.map((m) => (
          <MusicCard key={m.id} musique={m} />
        ))}
      </div>
    </div>
  );
}