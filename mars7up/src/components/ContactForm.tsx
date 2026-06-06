"use client";

import { useRef, useState } from "react";
import { Send, Paperclip } from "lucide-react";

export default function ContactForm() {
  const [objet, setObjet] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:armony-music@gmail.com?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(description)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full bg-[#262626] border border-[#6E5F50] rounded-md px-4 py-3" +
    "placeholder:text-[#555] focus:outline-none focus:border-[#fad8b6] focus:ring-1 " +
    "focus:ring-[#6E5F50] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl mx-auto">
      <div>
        <label className="font-display text-lg text-[#ffd8b6] tracking-widest block mb-2">
          Objet
        </label>
        <input
          type="text"
          value={objet}
          onChange={(e) => setObjet(e.target.value)}
          required
          placeholder="Sujet de votre message..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="font-display text-lg text-[#ffd8b6] tracking-widest block mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={7}
          placeholder="Votre message..."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Pièce jointe */}
      <div>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 text-[#fad8b6] hover:text-[#FFB400] transition-colors text-sm"
        >
          <Paperclip size={16} />
          {fileName ? fileName : "Ajouter une pièce jointe"}
        </button>
        {fileName && (
          <p className="text-xs text-[#555] mt-1">
            Note : la pièce jointe s'ouvrira dans votre client mail.
          </p>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-[#100000] hover:bg-[#300000]
          text-[#fad8b6] font-display text-xl tracking-widest py-3 rounded-md transition-colors
          shadow-lg shadow-white-900/30 mt-2"
      >
        <Send size={18} />
        {sent ? "Ouverture du client mail…" : "Envoyer"}
      </button>
    </form>
  );
}