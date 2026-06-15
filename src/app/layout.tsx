import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Mon App Musicale",
  description: "Découvrez nos créations musicales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-background text-foreground min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}