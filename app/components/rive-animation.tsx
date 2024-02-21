"use client";

import React, {useState} from "react";
import {useRive, Layout, Fit, Alignment} from "@rive-app/react-canvas";

const RiveAnimation = () => {

    const {RiveComponent} = useRive({
        src: "rive.riv",
        stateMachines: "Timeline 1",
        layout: new Layout({
            fit: Fit.FitWidth,
            alignment: Alignment.Center,
        }),
        autoplay: true,

    });

    return (
        <div
            className="absolute h-full w-full"
        >
            <RiveComponent/>
        </div>
    );
};

export default RiveAnimation;
