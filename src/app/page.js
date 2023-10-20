import BabyWinter from "@/components/Homepage/BabyWinter/BabyWinter";
import Banner from "@/components/Homepage/Banner/Banner";
import Jwel from "@/components/Homepage/Jwel/Jwel";
import Watch from "@/components/Homepage/Watch/Watch";
import Women from "@/components/Homepage/Women/Women";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Banner />
      <BabyWinter />
      <Watch />
      <Jwel />
      <Women />
    </div>
  );
}
