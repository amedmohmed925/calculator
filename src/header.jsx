import React from "react";
import { loggedInMenu, nonLoggedInMenu } from "./menu";

function HeaderMenu({ loggedIn, setLoggedIn }) {
  const menu = loggedIn ? loggedInMenu : nonLoggedInMenu;

  return (
    <div className="header-menu">
      {menu.map((item, index) => (
        <div key={index} onClick={item.action ? () => setLoggedIn(!loggedIn) : null}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default HeaderMenu;