import React from "react";
import mobile from "@/public/intro.png";
import Image from "next/image";

const IntroMobile = () => {
    return (
        <div className="container flex flex-col justify-between items-center bg-zinc-100 rounded-2xl h-screen">
            <div className="p-4 flex flex-col justify-center items-center">
                <Image src={mobile} alt="mobile app view" priority={true}/>
                <h1 className="text-xl font-bold text-center mb-2">
                <span className="bg-gradient-to-r from-orange-400 to-fuchsia-500 text-transparent bg-clip-text">
                About.
                </span>{" "}
                    is your digital portfolio
                </h1>
                <p className="text-sm text-zinc-500">Simple & beautiful</p>
            </div>
            <form className="flex flex-col gap-2 w-full p-4">
                <input
                    className=" text-sm rounded-2xl text-zinc-500 focus:outline-none p-2"
                    type="text"
                    placeholder="Enter your email address"
                />
                <button
                    className="p-3 text-sm font-medium text-white rounded-2xl bg-gradient-to-r from-orange-400 to-fuchsia-500 hover:animate-pulse motion-reduce:hover:animate-pulse">
                    Join the waitlist
                </button>
            </form>
        </div>
    );
};

export default IntroMobile;
