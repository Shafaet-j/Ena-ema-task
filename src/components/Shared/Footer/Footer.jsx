import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <footer className="  border-b-gray-200 py-14 border px-5">
        <div className=" container mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4">
          <div className=" space-y-5 flex flex-col">
            <h3 className=" font-light text-xs">HELP</h3>
            <p className=" font-light text-sm">
              Our Client Advisors are available to assist you by phone at
              <span className=" underline">+1.866.VUITTON</span> . You can also
              chat or email us.
            </p>
            <a className=" font-light text-sm" href="">
              FAQs
            </a>
            <a className=" font-light text-sm" href="">
              Product Care
            </a>
            <a className=" font-light text-sm" href="">
              Stores
            </a>
          </div>
          <div className=" space-y-5 flex flex-col">
            <h3 className=" font-light text-xs">HELP</h3>
            <a className=" font-light text-sm" href="">
              Repairs
            </a>
            <a className=" font-light text-sm" href="">
              Personalization
            </a>
            <a className=" font-light text-sm" href="">
              Art of Gifting
            </a>
            <a className=" font-light text-sm" href="">
              Download our Apps
            </a>
          </div>

          <div className=" space-y-5 flex flex-col">
            <h3 className=" font-light text-xs">ABOUT LOUIS VUITTON</h3>

            <a className=" font-light text-sm" href="">
              Fashion Shows
            </a>
            <a className=" font-light text-sm" href="">
              Arts & Culture
            </a>
            <a className=" font-light text-sm" href="">
              Sustainability
            </a>
            <a className=" font-light text-sm" href="">
              La Maison
            </a>
            <a className=" font-light text-sm" href="">
              Careers
            </a>
          </div>
          <div className=" space-y-5 flex flex-col">
            <h3 className=" font-light text-xs">HELP</h3>
            <p className=" font-light text-sm">
              <span className=" underline">Sign up</span>for Louis Vuitton
              emails and receive the latest news from the Maison, including
              exclusive online pre-launches and new collections.
            </p>
            <a className=" font-light text-sm" href="">
              Follow Us
            </a>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto py-10 space-y-10 px-5">
        <div className=" flex flex-col-reverse lg:flex-row lg:flex items-center justify-between gap-5">
          <div className=" flex gap-3 items-center">
            <span className=" underline font-light text-sm">Ship to:</span>
            <span className=" underline font-light text-sm">
              <LiaFlagUsaSolid />
            </span>
            <span className=" underline font-light text-sm">United States</span>
          </div>
          <div className=" flex flex-wrap items-center justify-center gap-0 lg:gap-3">
            <a className="font-light text-xs p-2" href="">
              Site map
            </a>
            <a className="font-light text-xs p-2" href="">
              Legal Notice
            </a>
            <a className="font-light text-xs p-2" href="">
              Privacy Policy
            </a>
            <a className="font-light text-xs p-2" href="">
              California Supply Chains Act
            </a>
            <a className="font-light text-xs p-2" href="">
              Do Not Sell or Share My Personal Information
            </a>
            <a className="font-light text-sm p-2" href="">
              Accessibility
            </a>
          </div>
        </div>
        <h1 className="text-black text-center font-bold text-base hidden lg:block">
          LOUIS VUITTON
        </h1>
      </div>
    </>
  );
};

export default Footer;
