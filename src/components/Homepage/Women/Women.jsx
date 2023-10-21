import React from "react";

const Women = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
        https://i.ibb.co/S6jhWKD/Women-Flight.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className=" flex justify-center items-end overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0.69) , rgba(196, 196, 196, 0.00))`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-12 text-center w-full"
      >
        <h2 className=" text-3xl font-normal text-white mb-7">Flight Mode</h2>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
          <button className=" bg-opacity-50 backdrop-filter backdrop-blur-2xl bg-black border border-white px-7 py-2 rounded-full text-white w-70">
            Discover the Collection
          </button>
          <button className=" bg-opacity-50 backdrop-filter backdrop-blur-2xl bg-black border border-white px-7 py-2 rounded-full text-white w-70">
            Explore All Ready-to-Wear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Women;
