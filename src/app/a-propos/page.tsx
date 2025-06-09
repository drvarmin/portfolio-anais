"use client";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white pt-4 md:pt-8 px-4">
      <section className="flex flex-col md:flex-row items-center max-w-4xl w-full gap-12">
        <div className="flex-1 flex flex-col items-center justify-start">
          <Image
            src="/Anais sans fond.png"
            alt="Photo de profil Anaïs Blanquet"
            width={400}
            height={400}
            className="rounded-3xl object-contain"
            priority
          />
          <div className="flex items-center gap-2 mt-4 mb-2">
            <span className="text-green-500 text-xl">🟢</span>
            <span className="text-base font-medium text-gray-700">disponible</span>
          </div>
          <a href="/contact" className="inline-block font-bold text-white text-lg px-8 py-4 rounded-xl shadow-lg mt-2" style={{ background: "linear-gradient(90deg, #a259e6 0%, #ff6a3d 100%)" }}>
            Prendre rendez-vous avec moi
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">À propos</h1>
          <p className="text-lg md:text-xl text-black mb-4">
            Je suis Anaïs BLANQUET et j'implémente des solutions sur-mesure pour automatiser vos process, fluidifier la collaboration de vos équipes et centraliser vos données.<br /><br />
            En tant qu'ancienne contrôleuse financière j'ai acquis de solides compétences en architecture de bases de données, création de dashboards clairs, optimisation et automatisation de process.<br /><br />
            Entrepreneure dans l'âme, je mène aujourd'hui de front mes missions freelance et ma start-up e-commerce <a href="https://www.bien-lunee.fr/?utm_source=sitefreelance" target="_blank" rel="noopener noreferrer" className="text-[#ff6a3d] underline font-semibold">Bien Luné.e</a> qui révolutionne les règles des personnes menstruées.
          </p>
        </div>
      </section>
    </main>
  );
} 