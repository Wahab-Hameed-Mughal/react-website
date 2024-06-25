import React, { useRef } from "react";
import Button from "./Component/Button";
import Screen from "./Component/Screen";
import CalProvider from "./CalContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../Component/Header";
import Theme from "../Component/Theme";

function Calculator() {
  const btn = [
    ["AC", "DE", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const container = useRef();

  useGSAP(() => {
    gsap.from(".allset", {
      y: 250,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
    });
    gsap.to(".allset", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div className="theme">
        <div
          ref={container}
          className="w-full h-full bg-gray-100 dark:bg-gray-800 pb-5"
        >
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"Calculator"} />
            <Theme />
          </div>

          <div className="h-screen flex justify-center items-center min min-h-[550px]">
            <CalProvider>
              <section className="allset p-5 border-2 shadow-lg rounded-3xl dark:shadow-white">
                <Screen key={""} />

                <div className="grid grid-cols-4 gap-4">
                  {btn.flat().map((btn, i) => (
                    <Button value={btn} keys={i} />
                  ))}
                </div>
              </section>
            </CalProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
