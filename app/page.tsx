"use client";
import Image from "next/image";
import Carasouel from "./components/Carasouel";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-5xl mt-10">SLIDER CARASOUEL</h1>
      <Carasouel />
    </main>
  );
}
