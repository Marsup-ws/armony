"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Musique } from "@/data/musiques";
import MusicPlayer from "./MusicPlayer";

interface Props {
  musique: Musique;
}

export default function MusicCard({ musique }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer group bg-[#111] border border-[#3a0000] rounded-lg overflow-hidden
          hover:border-[#cc0000] hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={musique.avatar}
            alt={musique.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 border-t border-[#3a0000]">
          <p className="font-display text-xl tracking-widest text-[#cc0000] text-center">
            {musique.name}
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0d0d0d] border border-[#3a0000] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-[#cc0000] tracking-widest text-center red-glow">
              Lecteur
            </DialogTitle>
          </DialogHeader>
          <MusicPlayer musique={musique} />
        </DialogContent>
      </Dialog>
    </>
  );
}