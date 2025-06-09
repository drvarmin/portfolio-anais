"use client";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#a259e6] to-[#ff6a3d] bg-clip-text text-transparent">Contact</h1>
      <div className="w-full max-w-2xl mx-auto">
        <div style={{ width: '100%', height: '500px' }} data-fillout-id="p49NwWVU4kus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
      </div>
    </main>
  );
} 