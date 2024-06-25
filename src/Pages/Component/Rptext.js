import React from "react";
import { useNavigate } from "react-router-dom";

function Rptext({ name, nName, progress }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card w-100">
        <button
          className="w-full border-2 border-black bg-gray-200 text-4xl cursor-pointer rounded-3xl p-5 text-nowrap shadow-lg shadow-black dark:shadow-white hover:shadow-none hover:translate-y-2 duration-500 relative"
          onClick={() => navigate(`${nName}`)}
        >
          {name}
          {progress && (
            <div
              class="ribbon"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                top: 0,
                right: 0,
                lineHeight: 1.8,
                paddingInline: "1lh",
                paddingBottom: ".5em",
                borderImage: "conic-gradient(#0008 0 0) 51%/.5em",
                clipPath:
                  "polygon(100% calc(100% - .5em),100% 100%,calc(100% - .5em) calc(100% - .5em),.5em calc(100% - .5em), 0 100%,0 calc(100% - .5em),999px calc(100% - .5em - 999px),calc(100% - 999px) calc(100% - .5em - 999px))",
                transform:
                  "translate(calc((1 - cos(45deg))*100%), -100%) rotate(45deg)",
                transformOrigin: "0% 100%",
                backgroundColor: "#BD1550",
              }}
            >
              Progress
            </div>
          )}
        </button>
      </div>
    </>
  );
}

export default Rptext;
