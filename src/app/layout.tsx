import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'Exigence Mécanique | Garage Premium",
  description: "Entretien, diagnostic et réparation automobile. Un savoir-faire de précision pour votre sécurité au quotidien, sans compromis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
