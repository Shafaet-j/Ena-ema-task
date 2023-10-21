import Image from "next/image";
import React from "react";
import bag from "../../../assets/bag.jpg";
import gift from "../../../assets/gift.jpg";

const Services = () => {
  return (
    <div className=" container mx-auto pt-20 pb-11">
      <h2 className=" text-center mb-6 text-2xl">Services</h2>
      <div className=" lg:flex items-center gap-5">
        <div className=" space-y-5">
          <Image className=" w-full" src={bag} placeholder="blur" />
          <h2>How Can We Help You?</h2>
          <p>
            Wherever you are, Louis Vuitton Client Advisors will be delighted to
            assist you.
          </p>
          <button>Contact Us</button>
        </div>
        <div className=" space-y-5">
          <Image className=" w-full" src={gift} placeholder="blur" />
          <h2>Art of Gifting</h2>
          <p>
            Choose the perfect gift from our specially curated selection of
            products.
          </p>
          <button className=" underline mr-5">Gifts for Her</button>
          <button className=" underline">Gifts for Him</button>
        </div>
        <div className=" space-y-5">
          <Image className=" w-full" src={bag} placeholder="blur" />
          <h2>How Can We Help You?</h2>
          <p>
            Wherever you are, Louis Vuitton Client Advisors will be delighted to
            assist you.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
