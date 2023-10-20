import Image from "next/image";
import React from "react";
import bag from "../../../assets/bag.jpg";
import gift from "../../../assets/gift.jpg";

const Services = () => {
  return (
    <div className=" container mx-auto pt-20 pb-11">
      <h2 className=" text-center mb-6 text-2xl">Services</h2>
      <div className=" lg:flex items-center gap-5">
        <div>
          <Image
            className=" w-full"
            src={bag}
            height={215}
            placeholder="blur"
          />
          <h2>How Can We Help You?</h2>
          <p>
            Wherever you are, Louis Vuitton Client Advisors will be delighted to
            assist you.
          </p>
          <button>Contact Us</button>
        </div>
        <div>
          <Image
            className=" w-full"
            src={gift}
            width={382}
            height={215}
            placeholder="blur"
          />
          <h2>How Can We Help You?</h2>
          <p>
            Wherever you are, Louis Vuitton Client Advisors will be delighted to
            assist you.
          </p>
          <button>Contact Us</button>
        </div>
        <div>
          <Image
            className=" w-full"
            src={bag}
            width={382}
            height={215}
            placeholder="blur"
          />
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
