import React from "react";
import mobile from "@/public/intro.png";
import Image from "next/image";
import Waitlist from "@/app/components/waitlist";

const IntroMobile = () => {
    return (
        <div className="container flex flex-col w-full justify-between items-center bg-zinc-100 rounded-2xl h-screen">
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
            <Waitlist/>
        </div>
    );
};

export default IntroMobile;
