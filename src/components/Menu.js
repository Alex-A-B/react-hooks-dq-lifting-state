import React from "react";

function Menu( { darkMode, changeDarkMode }) {

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={(e) => changeDarkMode(e.target.checked)}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
