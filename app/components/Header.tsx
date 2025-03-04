import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-main-header-dark">
        User Persona
      </h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
