import React from "react";

const Watch = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/pQ7F5d2/Louis-Vuitton.jpg)`,
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
        <h2 className=" text-3xl font-normal text-white mb-7">
          Louis Vuitton x AKRIVIA
        </h2>
        <div>
          <button className=" bg-transparent border border-white px-6 py-2 rounded-full text-white">
            Discover the Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
