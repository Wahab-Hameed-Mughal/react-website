import React, { useEffect } from "react";
import "./Timer_2.css";

function Timer_2({ hours, minutes, second }) {
  useEffect(() => {
    var timer = JSON.parse(localStorage.getItem("timer"));

    // hours
    // console.log(timer["hours"], hours);
    if (timer["hours"] !== hours) {
      var hoursset = document.querySelector(".hours .figure");
      hoursset.children[0].classList.remove("tflip");
      hoursset.children[2].classList.remove("tflip");
      hoursset.children[3].classList.remove("tflip");

      hoursset.children[2].innerHTML = hours < 10 ? "0" + hours : hours;
      hoursset.children[3].children[0].innerHTML =
        hours < 10 ? "0" + hours : hours;

      var hplus = hours + 1;
      var ss = hplus < 10 ? "0" + hplus : hplus;
      hoursset.children[0].innerHTML = ss;
      hoursset.children[1].children[0].innerHTML = ss;
      setTimeout(() => {
        hoursset.children[0].classList.add("tflip");
        hoursset.children[2].classList.add("tflip");
        hoursset.children[3].classList.add("tflip");
      }, 100);
    }

    //  minutes
    // console.log(timer["minutes"], minutes);
    if (timer["minutes"] !== minutes) {
      var minset = document.querySelector(".min .figure");
      minset.children[0].classList.remove("tflip");
      minset.children[2].classList.remove("tflip");
      minset.children[3].classList.remove("tflip");

      minset.children[2].innerHTML = minutes < 10 ? "0" + minutes : minutes;
      minset.children[3].children[0].innerHTML =
        minutes < 10 ? "0" + minutes : minutes;

      var mplus = minutes + 1;
      var ss = mplus < 10 ? "0" + mplus : mplus;
      minset.children[0].innerHTML = ss;
      minset.children[1].children[0].innerHTML = ss;
      setTimeout(() => {
        minset.children[0].classList.add("tflip");
        minset.children[2].classList.add("tflip");
        minset.children[3].classList.add("tflip");
      }, 100);
    }

    // second
    {
      var secset = document.querySelector(".sec .figure");
      secset.children[0].classList.remove("tflip");
      secset.children[2].classList.remove("tflip");
      secset.children[3].classList.remove("tflip");

      secset.children[2].innerHTML = second < 10 ? "0" + second : second;
      secset.children[3].children[0].innerHTML =
        second < 10 ? "0" + second : second;

      var splus = second + 1;
      var ss = splus < 10 ? "0" + splus : splus;
      secset.children[0].innerHTML = ss;
      secset.children[1].children[0].innerHTML = ss;
      setTimeout(() => {
        secset.children[0].classList.add("tflip");
        secset.children[2].classList.add("tflip");
        secset.children[3].classList.add("tflip");
      }, 100);
    }
  });

  return (
    <>
      <div className="countdown">
        <div className="bloc-time hours">
          <span className="count-title text-black dark:text-white">Hours</span>

          <div className="figure">
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">00</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </div>
        </div>

        <div className="bloc-time min">
          <span className="count-title text-black dark:text-white">
            Minutes
          </span>

          <div className="figure">
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">00</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </div>
        </div>

        <div className="bloc-time sec">
          <span className="count-title text-black dark:text-white">
            Seconds
          </span>

          <div className="figure">
            <span className="top tflips">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom tflips">14</span>
            <span className="bottom-back tflips">
              <span>14</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer_2;
