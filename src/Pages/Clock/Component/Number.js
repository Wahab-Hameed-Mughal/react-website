import React from "react";

function Number({ num, numclass }) {
  return (
    <>
      <div
        className={`number text-[4em] font-bold text-center h-full w-full absolute dark:text-white ${numclass}`}
        style={{ "--i": num === "12" ? "0" : num }}
      >
        <div>{num}</div>
      </div>
    </>
  );
}

export default Number;
