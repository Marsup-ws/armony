"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Download } from "lucide-react";
import { Musique } from "@/data/musiques";
import Link from "next/link";

interface Props {
  musique: Musique;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function MusicPlayer({ musique }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const rewind = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setCurrentTime(0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center gap-6 p-2">
      <audio ref={audioRef} src={musique.file} preload="metadata" />

      <img
        src={musique.avatar}
        alt={musique.name}
        className="w-40 h-40 object-cover rounded-md border-2 border-[#cc0000] shadow-lg shadow-red-900/40"
      />
      <p className="font-display text-3xl text-[#cc0000] tracking-widest red-glow">
        {musique.name}
      </p>

      {/* Timeline */}
      <div className="w-full flex items-center gap-3">
        <span className="text-xs text-[#888] w-10 text-right">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={seek}
          className="flex-1 h-1 accent-[#cc0000] cursor-pointer"
        />
        <span className="text-xs text-[#888] w-10">
          {formatTime(duration)}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={rewind}
          className="text-[#cc0000] hover:text-[#ff2222] transition-colors"
          title="Rembobiner"
        >
          <RotateCcw size={22} />
        </button>

        <button
          onClick={togglePlay}
          className="bg-[#cc0000] hover:bg-[#ff2222] text-white rounded-full p-3 transition-colors shadow-lg shadow-red-900/40"
        >
          {playing ? <Pause size={28} /> : <Play size={28} />}
        </button>
        <a
          href={musique.file}
          download
          className="text-[#cc0000] hover:text-[#ff2222] transition-colors"
          title="Télécharger"
        >
          <Download size={22} />
        </a>
      </div>
    </div>
  );
}