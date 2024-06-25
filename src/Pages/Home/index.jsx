import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../Component/Header";
import Theme from "../Component/Theme";
import Rptext from "../Component/Rptext";

export default function Home() {
  const homelist = useRef();

  useGSAP(() => {
    gsap.from(".card ", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
    });
    gsap.to(".card ", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div className="theme">
        <div className="dark:bg-gray-800 min-h-screen h-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"React Project"} />
            <Theme />
          </div>
          <div
            ref={homelist}
            className="flex flex-col flex-wrap gap-5 mx-5 sm:flex-row sm:mx-10 pb-5"
          >
            <Rptext name={"Todo List"} nName={"Todo List"}/>
            <Rptext name={"Calculator"} nName={"Calculator"}/>
            <Rptext name={"Clock"} nName={"Clock"}/>
            <Rptext name={"Timer"} nName={"Timer"}/>


            <Rptext name={"Kit Gaming"} nName={"Kit Gaming"} progress={true}/>
          </div>
        </div>
      </div>
    </>
  );
}
