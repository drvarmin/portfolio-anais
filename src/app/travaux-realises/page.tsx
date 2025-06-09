"use client";
import Image from "next/image";
import { useState } from "react";

const cases = [
  {
    gif: "/planning edito dans Notion.gif",
    alt: "Création automatique des plannings éditoriaux pour une agence de community management",
  },
  {
    gif: "/Suivi et gestion du stock dans Notion pour une marque e-commerce.gif",
    alt: "Suivi et gestion du stock pour une marque e-commerce",
  },
  {
    gif: "/devis pour vente de produits sur-mesure.gif",
    alt: "Vente de produits sur-mesure : envoi automatique de devis et de liens de paiement personnalisés",
  },
  {
    gif: "/envoi retours e-commerce.gif",
    alt: "E-commerce : envoi automatique des retours clients à l'entreprise logistique",
  },
];

function CaseSlider() {
  const [index, setIndex] = useState(0);
  const total = cases.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  return (
    <div className="w-full flex items-center justify-center gap-2 relative min-h-[600px]">
      <button onClick={prev} aria-label="Précédent" className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition -translate-x-1/2 top-[50%] -translate-y-1/2 flex items-center justify-center w-12 h-12">
        <span className="text-3xl">&#8592;</span>
      </button>
      <div className="flex flex-row w-full justify-center">
        <div className="flex justify-center items-center w-full">
          <Image src={cases[index].gif} alt={cases[index].alt} width={1800} height={900} className="rounded-2xl object-cover w-full h-auto" />
        </div>
      </div>
      <button onClick={next} aria-label="Suivant" className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition translate-x-1/2 top-[50%] -translate-y-1/2 flex items-center justify-center w-12 h-12">
        <span className="text-3xl">&#8594;</span>
      </button>
    </div>
  );
}

export default function TravauxRealises() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">Quelques exemples de travaux réalisés</h1>
      <CaseSlider />
      <div className="w-full flex justify-center mt-12">
        <a href="/contact" className="inline-block font-bold text-white text-lg px-8 py-4 rounded-xl shadow-lg" style={{ background: "linear-gradient(90deg, #a259e6 0%, #ff6a3d 100%)" }}>
          Demander un devis pour mon projet
        </a>
      </div>
    </main>
  );
} 