import BabyWinter from "@/components/Homepage/BabyWinter/BabyWinter";
import Banner from "@/components/Homepage/Banner/Banner";
import Jwel from "@/components/Homepage/Jwel/Jwel";
import LvSki from "@/components/Homepage/LvSki/LvSki";
import Men from "@/components/Homepage/Men/Men";
import Services from "@/components/Homepage/Services/Services";
import Watch from "@/components/Homepage/Watch/Watch";
import Women from "@/components/Homepage/Women/Women";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Banner />
      <LvSki />
      <Women />
      <BabyWinter
        title="The New OnTheGo East West"
        bg="https://i.ibb.co/0GQ9bkW/new.jpg"
      />
      <Men
        video="https://lv-vod.fl.freecaster.net/vod/louisvuitton/RBQmoXQwtn_HD.mp4"
        title="Men's Fall 2023 Collection"
      />
      <Jwel />
      <Watch />
      <Men
        video="https://lv-vod.fl.freecaster.net/vod/louisvuitton/mxNQPnPuZJ_HD.mp4"
        title="Women's Fashion Campaign"
      />
      <Services />
    </div>
  );
}
