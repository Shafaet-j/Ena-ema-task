import BabyWinter from "@/components/Homepage/BabyWinter/BabyWinter";
import Banner from "@/components/Homepage/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Banner />
      <BabyWinter />
    </div>
  );
}
