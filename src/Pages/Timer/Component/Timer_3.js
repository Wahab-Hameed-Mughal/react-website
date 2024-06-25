import React, { useEffect } from "react";
import "./Timer_3.css";

function Timer_3({ hours, minutes, second }) {
  useEffect(() => {
    // hours
    var t3h = hours.toString().split("");
    if (t3h.length < 2) t3h.unshift("0");
    var fs = [".first", ".second"];
    for (let i in fs) {
      document.querySelector(
        `.hours-group ${fs[i]} .number-grp-wrp`
      ).style = `transform:translateY(-${t3h[i]}0%)`;
    }

    // minutes
    var t3m = minutes.toString().split("");
    if (t3m.length < 2) t3m.unshift("0");
    var fs = [".first", ".second"];
    for (let i in fs) {
      document.querySelector(
        `.minutes-group ${fs[i]} .number-grp-wrp`
      ).style = `transform:translateY(-${t3m[i]}0%)`;
    }

    // second
    var t3s = second.toString().split("");
    if (t3s.length < 2) t3s.unshift("0");
    var fs = [".first", ".second"];
    for (let i in fs) {
      document.querySelector(
        `.seconds-group ${fs[i]} .number-grp-wrp`
      ).style = `transform:translateY(-${t3s[i]}0%)`;
    }
  });
  return (
    <>
      <div className="timer clock">
        <div className="hours-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clock-separator">
          <p>:</p>
        </div>
        <div className="minutes-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clock-separator">
          <p>:</p>
        </div>
        <div className="seconds-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer_3;
