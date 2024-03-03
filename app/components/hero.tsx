"use client";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Hero() {
  return (
    <div className="flex flex-col gap-y-8 container mx-auto px-6">
      <div className="flex flex-col items-center sm:flex-row sm:gap-x-6 gap-y-6 sm:gap-y-0 ">
        <div className=" flex flex-col text-center lg:gap-y-4 gap-y-4 sm:gap-y-2 sm:max-w-[50%] order-last">
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl  text-veryDarkBlue font-extrabold">More than just shorter links</h1>
          <p className="text-grayishViolet sm:text-sm lg:text-lg leading-8 sm:leading-4 lg-leading-8 text-lg">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="capitalize bg-cyan self-center rounded-3xl px-5 py-2">get started</button>
        </div>
        <div className="w-full">
            <img src="/illustration-working.svg" alt="" />
        </div>
      </div>

      <div className="">
        <div className="bg-darkViolet">
            <form action="" className="flex p-6 flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-center gap-x-2">
                <input type="text" name="" id="" className="sm:w-[75%] w-full h-12 border-2" />
                <button type="submit" className="sm:w-[25%] w-full capitalize h-12">shorten it!</button>
            </form>
        </div>

      </div>
    </div>
  );
}
