"use client";

import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  return (
    <div className="container mx-auto flex items-center justify-between p-6">
      <div className="flex sm:gap-x-8 items-center justify-between sm:justify-normal text-sm ">
        <img src="/logo.svg" alt="logo" className="h-8" />
        <div className="gap-x-4 hidden sm:flex text-grayishViolet">
          <a className="capitalize" href="http://" target="_blank" title="">
            features
          </a>
          <a className="capitalize" href="http://" target="_blank" title="">
            pricing
          </a>
          <a className="capitalize" href="http://" target="_blank" title="">
            resources
          </a>
        </div>
      </div>


      <div className="sm:flex text-sm gap-x-4 hidden text-grayishViolet">
        <button className="capitalize">login</button>
        <button className="bg-cyan capitalize px-3 py-1 rounded-lg text-white">
          sign up
        </button>
      </div>

      <div className="inline-block sm:hidden text-grayishViolet text-3xl">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}
3;
