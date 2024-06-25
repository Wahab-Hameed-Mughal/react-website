import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "false"
  );

  useEffect(() => {
    if (theme === "true")
      document.querySelector(".theme").classList.add("dark");
    else document.querySelector(".theme").classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    localStorage.setItem("theme", theme === "true" ? "false" : "true");
    setTheme(theme === "true" ? "false" : "true");
  };

  return (
    <>
      <button
        onClick={handleTheme}
        className="w-16 h-16 border-2 border-black rounded-full dark:border-white dark:text-white"
      >
        {theme === "true" ? (
          <FontAwesomeIcon icon={faMoon} className="fa-xl" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="fa-xl" />
        )}
      </button>
    </>
  );
}

export default Theme;
