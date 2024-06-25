import React, { useState } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

import Feed from "./Component/Feed";

function KitGaming() {
  const [menu, setmenu] = useState(false);
  const navbar = () => {
    setmenu(!menu);
    if (menu) {
      document.querySelector(".menu").classList.add("menuopen");
    } else {
      document.querySelector(".menu").classList.remove("menuopen");
    }
    console.log(menu);
  };

  return (
    <>
      <div
        className="flex flex-row text-gray-500"
        style={{ background: "#1f2128" }}
      >
        {/*
         left side
          */}
        <div className="menu flex flex-col border-e-2 border-gray-700 overflow-hidden">
          {/*
           logo 
           */}
          <div className="logo flex flex-row justify-around px-5  items-center h-24">
            <img
              src={require("./image/logo.PNG")}
              alt="logo"
              style={{ maxWidth: "150px" }}
              className="w-full"
            />
            <FontAwesomeIcon
              onClick={() => navbar()}
              icon={faGripLines}
              size="2xl"
              className="text-white cursor-pointer"
            />
          </div>

          {/* Feed */}
          <Feed name={"News Feed"} set={"feed"} />

          {/* Following */}
          <Feed name={"Following"} set={"follow"} />

          {/* Setting */}
          <Feed name={"Unity Gaming"} set={"setting"} />
        </div>

        {/*
         *
         * Main
         *
         */}
        <div className=" flex-grow">
          <header className="h-24">
            <div>
              <div>Brower</div>
              <div>search</div>
            </div>
            <div>1 2 3 4</div>
          </header>
          <div className="h-96 bg-slate-300"></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default KitGaming;
