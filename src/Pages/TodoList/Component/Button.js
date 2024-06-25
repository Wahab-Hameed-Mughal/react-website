import React from "react";

function Button({ text, bg, ...props }) {
  console.log(bg);
  return (
    <>
      <button
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        className={`p-3 text-white font-bold rounded-xl whitespace-nowrap h-fit duration-200 hover:translate-y-px
         ${bg ? bg : "bg-indigo-500 hover:bg-indigo-500/75"} 
         ${props.cn ? props.cn : ""}`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
