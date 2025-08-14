import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import "./style.scss";
const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // faqat theme o'zgarganda ishlaydi

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="header">
      <nav className="container header__nav">
        <Link to="/" className="header__logo">
          WeatherApp
        </Link>
        <button className="header__theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
