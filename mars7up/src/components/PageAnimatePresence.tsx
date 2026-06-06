"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageAnimatePresence({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}    // État de départ (invisible, légèrement plus bas)
      animate={{ opacity: 1, y: 0 }}     // État final (visible, à sa place)
      exit={{ opacity: 0, y: -15 }}      // État de sortie (s'efface en montant)
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}