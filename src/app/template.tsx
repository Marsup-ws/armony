// app/template.tsx
import PageAnimatePresence from "@/components/PageAnimatePresence";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <PageAnimatePresence>{children}</PageAnimatePresence>;
}