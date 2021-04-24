import { Avatar } from "@material-ui/core";
import { Apps, Menu, Notifications, Search, VideoCall } from "@material-ui/icons";
import React from "react";

function Header() {
  return (
    <div classNam='header'>
      <Menu />
      <img
        className="header__logo"
        src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
        alt=''
      />


      <input type="text"/>
      <Search />

      
      <VideoCall />
      <Apps />
      <Notifications />
      <Avatar />
    </div>
  );
}

export default Header;
