import React from "react";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">Mentions légales</h1>
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-8 text-black text-base md:text-lg">
        <h2 className="font-bold text-xl mb-4">Éditeur du site</h2>
        <p><strong>Nom :</strong> Anaïs BLANQUET<br/>
        <strong>SIRET :</strong> 92493315300018<br/>
        <strong>Adresse :</strong> 29 rue Emile DUPORT, 69009 LYON<br/>
        <strong>Email :</strong> contact@anais-blanquet.fr</p>
        <h2 className="font-bold text-xl mt-8 mb-4">Hébergement</h2>
        <p>Le site est hébergé par <strong>LWS (Ligne Web Services)</strong>.<br/>
        10, RUE PENTHIEVRE, 75008 PARIS<br/>
        Site web : <a href="https://www.lws.fr" className="underline text-[#a259e6]" target="_blank" rel="noopener noreferrer">www.lws.fr</a></p>
        <h2 className="font-bold text-xl mt-8 mb-4">Propriété intellectuelle</h2>
        <p>L'ensemble des contenus (textes, images, graphismes, logo, icônes, etc.) présents sur ce site sont la propriété exclusive d'Anaïs BLANQUET, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
        <h2 className="font-bold text-xl mt-8 mb-4">Données personnelles</h2>
        <p>Les informations recueillies via les formulaires de contact sont destinées uniquement à la gestion de vos demandes et ne sont en aucun cas transmises à des tiers. Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez : contact@anais-blanquet.fr</p>
        <h2 className="font-bold text-xl mt-8 mb-4">Responsabilité</h2>
        <p>Anaïs BLANQUET ne saurait être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
        <h2 className="font-bold text-xl mt-8 mb-4">Contact</h2>
        <p>Pour toute question, vous pouvez écrire à : <a href="mailto:contact@anais-blanquet.fr" className="underline text-[#a259e6]">contact@anais-blanquet.fr</a></p>
      </div>
    </main>
  );
} 