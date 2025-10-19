import Image from "next/image";
import Navheader from "./components/Navheader";
import Camera from "./components/Camera";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8 text-white">
      <div className="space-y-8 max-w-2xl px-4 mx-auto">
        {/*
        1. navbar
        2. kamera
        3. footer
         */}
         <Navheader />
         <Camera />
         <Footer />
      </div>
    </main>
  );
}
