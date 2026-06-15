"use client";

import { useState } from 'react';
interface Membre {
  id: number;
  prenom: string;
  image: string;
  description: string;
}

// 1. Définition des données de l'équipe
const membres = [
    { id: 1, prenom: "Eleonore", image: "/images/staff/eleonore.jpg", description: "Notre chanteuse." },
    { id: 2, prenom: "Serge", image: "/images/staff/serge.jpg", description: "Notre guitariste." },
    { id: 3, prenom: "Mars", image: "/images/staff/mars.jpg", description: "Notre clavieriste." },
    { id: 4, prenom: "Jeremy", image: "/images/staff/jeremy.jpg", description: "Notre bassiste." },
    { id: 5, prenom: "Kevin", image: "/images/staff/kevin.jpg", description: "Notre batteur, le roi du rythme capable aussi de chanter avec ferveur." },
];

export default function TeamSection() {
// 2. On indique au hook qu'il accepte soit un type Membre, soit null
  const [membreSelectionne, setMembreSelectionne] = useState<Membre | null>(null);

  return (
    // Le reste de votre code JSX reste exactement le même !
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {membres.map((membre) => (
          <div 
            key={membre.id} 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => setMembreSelectionne(membre)} // Plus d'erreur ici !
          >
            {/* Conteneur de l'image ronde avec effet de survol */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#cc0000] transition-all duration-300 shadow-md group-hover:shadow-[#cc0000]/50">
              <img 
                src={membre.image} 
                alt={membre.prenom} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Prénom */}
            <span className="mt-3 font-display text-lg text-gray-800 dark:text-gray-200 group-hover:text-[#cc0000] transition-colors duration-300">
              {membre.prenom}
            </span>
          </div>
        ))}
      </div>

      {/* 3. La Modale (S'affiche uniquement si un membre est cliqué) */}
      {membreSelectionne && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          {/* Contenu de la modale */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-sm w-full relative shadow-2xl border border-gray-100 dark:border-zinc-800">
            
            {/* Bouton Fermer */}
            <button 
              onClick={() => setMembreSelectionne(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-[#cc0000] text-xl font-bold p-1 transition-colors"
            >
              ✕
            </button>

            {/* Contenu aligné au centre */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#cc0000]">
                <img 
                  src={membreSelectionne.image} 
                  alt={membreSelectionne.prenom} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-[#cc0000] mb-2">
                {membreSelectionne.prenom}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {membreSelectionne.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}