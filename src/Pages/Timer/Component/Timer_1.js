import React from "react";

function Timer_1({ hours, minutes, second }) {
  return (
    <>
      <div className="text-3xl dark:text-white flex gap-2 text-[100px] my-10">
        <div>{hours < 10 ? "0" + hours : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? "0" + minutes : minutes}</div>
        <span>:</span>
        <div>{second < 10 ? "0" + second : second}</div>
      </div>
    </>
  );
}

export default Timer_1;
