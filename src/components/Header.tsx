"use client";

import { Playwrite_GB_J_Guides } from 'next/font/google'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const sofia = Playwrite_GB_J_Guides({
  weight: '400'
})

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos créations", href: "/creations" },
  { label: "Qui sommes nous", href: "/staff" },
  { label: "Nous contacter", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-gray-700 backdrop-blur-md border-b border-[#3a0000]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-3xl text-[#faaa5a] red-glow tracking-widest">
          <span className={sofia.className}>.Armony.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-lg tracking-wider transition-colors duration-200 hover:text-[#fad8b6] ${
                pathname === link.href
                  ? "text-[#e67300] border-b-2 border-[#cc0000]"
                  : "text-[#fad8b6]/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#cc0000] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#3a0000] px-4 pb-4 flex flex-col gap-4 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-display text-2xl tracking-widest transition-colors hover:text-[#e67300] ${
                pathname === link.href ? "text-[#cc0000]" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}