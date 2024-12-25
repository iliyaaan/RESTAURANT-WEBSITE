"use client";

import React from "react";
import Countdown, { CountdownRendererFn, CountdownRenderProps } from "react-countdown";

const endingDate = new Date("2025-01-01");

const CountDown = () => {
  // Custom renderer with type annotations
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
    return (
      <div className="font-bold text-4xl text-yellow-300 lg:text-5xl">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    );
  };

  return <Countdown date={endingDate} renderer={renderer} />;
};

export default CountDown;
