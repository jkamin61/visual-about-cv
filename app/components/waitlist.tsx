"use client";

import React from "react";

const Waitlist = () => {
    const submitJoinWaitlist = () => {
        console.log("Join the waitlist");
    };
    return (
        <div className="fixed bottom-0 w-full">
            <form className="flex flex-row gap-2 w-full p-4 items-center justify-center">
                <input
                    className=" text-sm rounded-xl text-zinc-500 focus:outline-none p-2 w-1/2  bg-zinc-200"
                    type="text"
                    placeholder="Enter your email address"
                />
                <button
                    onClick={submitJoinWaitlist}
                    className="p-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-orange-400 to-fuchsia-500 hover:animate-pulse motion-reduce:hover:animate-pulse"
                >
                    Join the waitlist
                </button>
            </form>
        </div>
    );
};

export default Waitlist;
