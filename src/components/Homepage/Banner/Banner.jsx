import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden -mt-[100px]">
      <video className=" w-full h-full object-cover" autoPlay muted loop>
        <source
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/BrGH2Rcx4A_HD.mp4"
          type="video/mp4"
        />
      </video>
      {/* Content to be displayed on top of the video */}
      <div className="flex items-center justify-center h-full absolute bottom-1 left-0 right-0">
        <div className="text-white text-center p-12">
          <button>Play btn</button>
          <div>
            <h1 className=" text-3xl">LV Ski</h1>
            <button>Explore the Collection</button>
          </div>
          <button>Sound</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
