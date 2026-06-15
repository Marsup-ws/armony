import TeamSection from "@/components/TeamSession";

export default function QuiSommesNousPage() {
  return (
<div>
<div className="pt-24 flex flex-col md:flex-row items-start justify-center p-6 gap-8">
  {/* Section Texte (50% sur grand écran) */}
  <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-left">
    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFB400] tracking-widest red-glow mb-4">
      Le groupe Armony
    </h1>
    <p className="font-display text-[#fad8b6] red-glow text-base sm:text-lg lg:text-xl max-w-md">
      Quand la musique s'ouvre à tous les styles...
      Quand la musique s'ouvre à toutes les époques.
    </p>
  </div>

  {/* Section Image (50% sur grand écran) */}
  <div className="w-full md:w-2/3 flex justify-center">
    <img
      src="/images/staff/groupe1.png"
      alt="groupe_Armony"
      className="w-full max-w-2xl h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
<TeamSection />
</div>
  );
}