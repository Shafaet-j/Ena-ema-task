"use client";
import React, { useRef, useState } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { BiPause, BiPlay } from "react-icons/bi";

const LvSki = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className=" w-full h-full object-cover"
        ref={videoRef}
        autoPlay
        muted
        loop
      >
        <source
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/BrGH2Rcx4A_HD.mp4"
          type="video/mp4"
        />
      </video>
      {/* Content to be displayed on top of the video */}
      <div className="flex items-end justify-center w-full absolute bottom-1 left-0 right-0">
        <div className="text-white text-center p-12 w-full">
          <h1 className=" text-3xl text-center">Lv Ski</h1>

          <div className=" flex justify-between items-center w-full">
            <button onClick={toggleVideo}>
              {isPlaying ? <BiPause size={30} /> : <BiPlay size={30} />}
            </button>
            <button className="bg-opacity-50 backdrop-filter backdrop-blur-2xl bg-black border border-white px-7 py-2 rounded-full text-white mt-5 w-60">
              Explore the Collection
            </button>
            <button onClick={toggleMute}>
              {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LvSki;
