import React from "react";

const Intro = () => {
    return (
        <div className="fixed top-0 w-full flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl xl:text-4xl font-bold text-center mb-2">
        <span className="bg-gradient-to-r from-orange-400 to-fuchsia-500 text-transparent bg-clip-text">
          About.
        </span>{" "}
                is your digital portfolio
            </h1>
            <p className="text-xl xl:text-2xl font-bold text-zinc-400">
                Simple & beautiful
            </p>
            <p className="text-xl xl:text-2xl font-bold bg-gradient-to-b from-zinc-400 to-zinc-300 text-transparent bg-clip-text">
                Beautiful
            </p>
            <p className="text-xl xl:text-2xl font-bold bg-gradient-to-b from-zinc-300 to-zinc-100 text-transparent bg-clip-text">
                Fun to use
            </p>
        </div>
    );
};

export default Intro;
