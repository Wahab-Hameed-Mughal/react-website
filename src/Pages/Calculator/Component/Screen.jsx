import React, { useContext } from "react";
import { CalContext } from "../CalContext";

function Screen() {
  const { cal } = useContext(CalContext);

  return (
    <>
      <div className="mb-5 py-5 shadow-inner bg-slate-200 text-3xl overflow-hidden relative rounded-2xl rounded-b-none">
        <span className="opacity-0">0</span>
        <div className="px-5 absolute top-5 end-0">{cal.num}</div>
      </div>
    </>
  );
}

export default Screen;
