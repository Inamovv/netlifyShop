import React, { useState, useEffect } from "react";
function Theme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`Theme ${theme}`}>
      <button className="btn btn-outline-primary" onClick={toggleTheme}>MODE</button>
    </div>
  );
}
export default Theme;
