"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "🗂️",
    title: "Audit & cartographie des process",
    desc: "J'analyse vos process et flux de données, mets en lumière les goulots d'étranglement et vous livre un plan d'action personnalisé.",
  },
  {
    icon: "🛠️",
    title: "Set-up d'outils de gestion de projet",
    desc: "J'implémente vos espaces de travail personnalisés pour faciliter la collaboration entre vos équipes (CRM, outils métiers, etc.)",
  },
  {
    icon: "💡",
    title: "Automatisation de process",
    desc: "Je connecte vos outils entre eux via des solutions No-Code comme Make pour automatiser vos tâches redondantes ou chronophages",
  },
  {
    icon: "📊",
    title: "Visualisation de données",
    desc: "J'organise vos données et je crée des dashboards clairs pour des prises de décisions rapides et en confiance",
  },
];

const clients = [
  { src: "/hyperealist2.png", alt: "Hyperealist" },
  { src: "/logo speak.png", alt: "Speak" },
  { src: "/logo aroma-zone.png", alt: "Aroma-Zone" },
  { src: "/logo senza.png", alt: "Senza" },
];

const testimonials = [
  {
    author: "Barbara",
    company: "Hyperealist",
    text: "Anaïs a structuré nos process, automatisé nos tâches chronophages et compris nos enjeux. Elle a proposé et mis en place des solutions efficaces. Je recommande chaudement !",
  },
  {
    author: "Camille",
    company: "Cabinet ACE",
    text: "Anaïs a revu et automatisé nos process internes sur Notion et Make. Pédagogue, disponible, elle nous apporte une vraie valeur ajoutée. Nous recommandons vivement !",
  },
  {
    author: "Emilie",
    company: "Arthur",
    text: "Très bonne prestation. Anaïs est efficace, rapide et communique très bien. Je referai appel à elle sans hésiter !",
  },
  {
    author: "Julien",
    company: "WOOD AND CO",
    text: "Super prestation, simple, efficace et très pro !",
  },
  {
    author: "Anne",
    company: "Aroma-Zone",
    text: "Anaïs a automatisé notre gestion de la micro-influence avec professionnalisme et pédagogie. Travail de qualité, tutoriel détaillé, je recommande chaleureusement !",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-2 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-orange-400 text-xl">⭐️</span>
      ))}
    </div>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const total = testimonials.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  // Pour affichage circulaire
  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(testimonials[(index + i) % total]);
    }
    return arr;
  };
  return (
    <div className="w-full flex items-center justify-center gap-2 relative min-h-[320px]">
      <button onClick={prev} aria-label="Précédent" className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition -translate-x-1/2 top-[50%] -translate-y-1/2 flex items-center justify-center w-10 h-10">
        <span className="text-2xl">&#8592;</span>
      </button>
      <div className="flex flex-row gap-8 w-full justify-center">
        {getVisible().map((t, i) => (
          <div
            key={i}
            className="min-w-[420px] max-w-[520px] bg-white rounded-2xl shadow p-6 py-8 flex flex-col items-center justify-center text-center mx-auto h-auto"
          >
            <StarRow />
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
                {t.author.charAt(0)}
              </div>
              <div className="font-semibold text-black mt-1">{t.author}</div>
              <div className="text-sm text-gray-500">{t.company}</div>
            </div>
            <p className="text-base md:text-lg mb-0 flex-1 flex items-center justify-center">{t.text}</p>
          </div>
        ))}
      </div>
      <button onClick={next} aria-label="Suivant" className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition translate-x-1/2 top-[50%] -translate-y-1/2 flex items-center justify-center w-10 h-10">
        <span className="text-2xl">&#8594;</span>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full flex flex-col font-sans">
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1600px] mx-auto pt-8 pb-0 px-4 md:px-16">
        {/* Bloc texte + bouton + logos */}
        <div className="flex-1 flex flex-col items-start gap-8 w-full max-w-2xl">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-black">Travaillez plus<br className="hidden md:block" /> efficacement.</h1>
            <p className="text-lg md:text-xl text-black mb-8 max-w-xl">
              J'audite et j'automatise vos process, je connecte vos outils et j'implémente des outils de gestion collaboratifs pour permettre à vos équipes de mieux travailler ensemble.
            </p>
            <a
              href="/contact"
              target="_self"
              rel="noopener noreferrer"
              className="inline-block font-bold text-white text-lg px-8 py-4 rounded-xl shadow-lg mb-8"
              style={{ background: "linear-gradient(90deg, #a259e6 0%, #ff6a3d 100%)" }}
            >
              Prendre rendez-vous
            </a>
          </div>
          {/* Logos outils sur une seule ligne, plus gros, rapprochés, centrés */}
          <div id="logos-outils" className="flex flex-row items-center justify-center gap-2 mb-0 w-full max-w-5xl mx-auto">
            <Image src="/logonotion2.png" alt="Notion" width={220} height={80} className="h-20 w-[220px] object-contain" />
            <Image src="/logo Make.png" alt="Make" width={390} height={144} className="h-36 w-[390px] object-contain" />
            <Image src="/mondaylogo.png" alt="Monday" width={220} height={80} className="h-20 w-[220px] object-contain" />
            <Image src="/logopipedrive3.png" alt="Pipedrive" width={220} height={80} className="h-20 w-[220px] object-contain" />
          </div>
        </div>
        {/* Photo sans fond, avec dégradé blanc en bas */}
        <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0 w-full max-w-xl relative">
          <Image
            src="/Anais sans fond.png"
            alt="Photo de profil Anais"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
          {/* Dégradé blanc en bas de la photo */}
          <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%)"}} />
        </div>
      </section>
      {/* Ligne confiance + logos clients juste après le hero */}
      <section className="w-full flex flex-col items-center justify-center py-1 px-4 md:px-0 mt-8">
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="flex flex-row items-center gap-4 mb-4">
            <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">Ils m'ont fait confiance</span>
            <span className="text-yellow-400 text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          {/* Logos clients défilants alignés */}
          <div className="relative w-full max-w-5xl mx-auto px-0 overflow-hidden mb-10">
            <div className="flex flex-row items-center gap-16 animate-scroll-logos whitespace-nowrap">
              <Image src="/hyperealist2.png" alt="Hyperealist" width={400} height={160} className="h-24 w-auto object-contain inline-block" priority />
              <Image src="/logo speak.png" alt="Speak" width={660} height={240} className="h-60 w-auto object-contain inline-block" priority />
              <Image src="/logo aroma-zone.png" alt="Aroma-Zone" width={440} height={160} className="h-24 w-auto object-contain inline-block" priority />
              <Image src="/logo senza.png" alt="Senza" width={400} height={160} className="h-24 w-auto object-contain inline-block" priority />
              <Image src="/logo Arthur v2.png" alt="Arthur" width={640} height={320} className="h-32 w-auto object-contain inline-block" priority />
              {/* Dupliquer pour effet infini */}
              <Image src="/hyperealist2.png" alt="Hyperealist" width={400} height={160} className="h-24 w-auto object-contain inline-block" />
              <Image src="/logo speak.png" alt="Speak" width={660} height={240} className="h-60 w-auto object-contain inline-block" />
              <Image src="/logo aroma-zone.png" alt="Aroma-Zone" width={440} height={160} className="h-24 w-auto object-contain inline-block" />
              <Image src="/logo senza.png" alt="Senza" width={400} height={160} className="h-24 w-auto object-contain inline-block" />
              <Image src="/logo Arthur v2.png" alt="Arthur" width={640} height={320} className="h-32 w-auto object-contain inline-block" />
            </div>
          </div>
        </div>
      </section>
      {/* Section Mes services avec titre en dégradé à l'intérieur */}
      <section id="mes-services" className="w-full flex flex-col items-center justify-center py-12 px-4 md:px-0 bg-[#faf9fa] scroll-mt-32">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">Mes services</h2>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte noire à gauche */}
          <div className="md:col-span-1 bg-black rounded-3xl p-8 flex flex-col justify-center shadow-lg min-h-[340px]">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Je vous aide à <br /><span className="bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent italic font-extrabold">y voir plus clair.</span></h2>
            <p className="text-white text-base md:text-lg opacity-90 mt-2 mb-6">
              Des données éparpillées entre plusieurs outils différents ?<br />
              Des tâches redondantes et chronophages que vous aimeriez automatiser ?<br />
              Un manque de process clairs qui vous fait perdre en efficacité ?
            </p>
            <a href="#contact" className="inline-block font-bold text-white text-lg px-8 py-4 rounded-xl shadow-lg mt-2 self-start" style={{ background: "linear-gradient(90deg, #a259e6 0%, #ff6a3d 100%)" }}>
              Demander un devis
            </a>
          </div>
          {/* Cartes services */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-md flex flex-col min-h-[180px]">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="text-xl font-extrabold mb-2 text-black">{s.title}</h3>
                <p className="text-base text-black opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Encadré 1h de consulting */}
        <div className="col-span-full bg-white rounded-3xl shadow-lg p-8 mt-8 flex flex-col items-center w-full max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <span>👩‍💻</span> <span>1h de consulting</span>
          </h3>
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-12 items-start">
            {/* Colonne gauche : photo */}
            <div className="flex-1 flex flex-col items-center justify-start mb-6 md:mb-0 h-full">
              <Image src="/Anais sans fond.png" alt="Photo Anaïs" width={400} height={400} className="rounded-2xl object-cover w-full h-full max-w-xs max-h-xs shadow-xl" />
            </div>
            {/* Colonne centre : texte + outils */}
            <div className="flex-1 flex flex-col justify-start items-center md:items-center text-center px-2">
              <p className="text-base md:text-lg text-black mb-4">
                Vous bloquez sur votre outil de gestion de projet ou bien vous avez une question précise ? Réservez une session de consulting d'1h pour débloquer la situation et repartir avec des solutions concrètes et sur-mesure.
              </p>
              <span className="text-xs text-gray-500 mt-2 mb-0 w-full text-center md:text-center">
                Couvert : optimisation de process, Notion, Make, Monday.com, Pipedrive, Fillout.<br />
                ✉️ Si autre outil : envoyez-moi un mail en amont à contact@anais-blanquet.fr svp
              </span>
            </div>
            {/* Colonne droite : inclus + bouton */}
            <div className="flex-1 flex flex-col justify-between items-center md:items-center text-left px-2 h-full">
              <div className="w-full">
                <div className="font-bold text-lg mb-2" style={{ color: '#FF6A3D' }}>Inclus :</div>
                <ul className="pl-0 text-base md:text-lg text-black mb-6 flex flex-col gap-2">
                  <li><span className="mr-2">✅</span>Préparation du call avec vos questions</li>
                  <li><span className="mr-2">✅</span>Analyse de vos besoins</li>
                  <li><span className="mr-2">✅</span>Visio de 1h (enregistrée)</li>
                  <li><span className="mr-2">✅</span>Débrief et plan d'action envoyé par mail</li>
                </ul>
              </div>
              <a href="https://anaisblanquet.fillout.com/t/oeue2c4s2cus" target="_blank" rel="noopener noreferrer" className="inline-block font-bold text-white text-lg px-6 py-2 rounded-xl shadow-lg mt-2 md:mt-0 mx-auto whitespace-nowrap" style={{ background: "linear-gradient(90deg, #a259e6 0%, #ff6a3d 100%)" }}>
                Réserver ma consultation - 170€
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Section témoignages clients grid */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Des clients <span className="bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent italic">satisfaits</span>
        </h2>
        <div className="w-full max-w-7xl mx-auto">
          <TestimonialsCarousel />
        </div>
        <div className="w-full flex justify-center mt-10">
          <a href="/contact" className="inline-block font-bold text-lg px-8 py-4 rounded-xl border-2 border-[#a259e6] bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] hover:bg-gradient-to-r hover:from-[#ff6a3d] hover:to-[#a259e6] hover:text-black transition flex items-center gap-2">
            Voir les travaux réalisés <span className="text-2xl leading-none">&gt;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
