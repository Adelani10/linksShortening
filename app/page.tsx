import Image from "next/image";
import NavBar from "./components/nav";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <NavBar/>    
      <Hero/>
    </main>
  );
}
