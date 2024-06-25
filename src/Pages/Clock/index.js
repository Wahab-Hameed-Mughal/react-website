import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import "./style.css";
import Number from "./Component/Number";
import Theme from "../Component/Theme";

function Clock() {
  var [time, settime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      settime(new Date());
    }, 1000);
  });

  return (
    <>
      <div className="theme">
        <div className="bg-white dark:bg-gray-800 h-full duration-500">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"Clock"} />
            <Theme />
          </div>
          {/* Analog Clock */}
          <div className="min-h-[55em] h-screen flex flex-col justify-center items-center overflow-hidden">
            <div className="analogclock w-[30em] h-[30em] sm:w-[40em] sm:h-[40em] flex justify-center border-4 rounded-full shadow-2xl relative dark:shadow-white">
              <Number num={"12"} numclass={"twelve"} />
              <Number num={"1"} numclass={"one"} />
              <Number num={"2"} numclass={"two"} />
              <Number num={"3"} numclass={"three"} />
              <Number num={"4"} numclass={"four"} />
              <Number num={"6"} numclass={"five"} />
              <Number num={"5"} numclass={"six"} />
              <Number num={"7"} numclass={"seven"} />
              <Number num={"8"} numclass={"eight"} />
              <Number num={"9"} numclass={"nine"} />
              <Number num={"10"} numclass={"ten"} />
              <Number num={"11"} numclass={"eleven"} />
              <div className="w-full h-1/2 rounded-full flex justify-center items-end relative">
                <div
                  className="hour_hand dark:bg-white"
                  style={{
                    transform: `rotateZ(${time.getHours() * 30}deg)`,
                  }}
                />
                <div
                  className="min_hand"
                  style={{
                    transform: `rotateZ(${time.getMinutes() * 6}deg)`,
                  }}
                />
                <div
                  className="sec_hand after:bg-black dark:after:bg-white"
                  style={{
                    transform: `rotateZ(${time.getSeconds() * 6}deg)`,
                  }}
                />
              </div>
            </div>
            {/* Digital Clock */}
            <div className="flex flex-row sm:gap-5 text-[6em] dark:text-white mt-10">
              <span className="border-4 rounded-[3rem] w-[1.5em] h-[1.5em] flex justify-center items-center shadow-lg dark:shadow-white">
                {time.getHours() % 12 < 10
                  ? "0" + (time.getHours() % 12)
                  : time.getHours() % 12}
              </span>
              <span style={{ lineHeight: "1.25" }}>:</span>
              <span className="border-4 rounded-[3rem] w-[1.5em] h-[1.5em] flex justify-center items-center shadow-lg dark:shadow-white">
                {time.getMinutes() < 10
                  ? "0" + time.getMinutes()
                  : time.getMinutes()}
              </span>
              <span style={{ lineHeight: "1.25" }}>:</span>
              <span className="border-4 rounded-[3rem] w-[1.5em] h-[1.5em] flex justify-center items-center shadow-lg dark:shadow-white">
                {time.getSeconds() < 10
                  ? "0" + time.getSeconds()
                  : time.getSeconds()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
