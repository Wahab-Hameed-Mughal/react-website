import React from "react";

function Header({name}) {
  return (
    <header className="todo p-0 m-0 py-5 text-center uppercase font-bold text-5xl dark:text-white">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
