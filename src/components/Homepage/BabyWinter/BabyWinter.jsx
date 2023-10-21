import React from "react";

const BabyWinter = ({ title, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
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
          {/* Baby Winter Capsule Collection */}
          {title}
        </h2>
        <div>
          <button className=" bg-opacity-50 backdrop-filter backdrop-blur-2xl bg-black border border-white px-7 py-2 rounded-full text-white">
            Explore the Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default BabyWinter;
