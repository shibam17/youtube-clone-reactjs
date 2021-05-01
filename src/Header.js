import { Avatar } from "@material-ui/core";
import { Apps, Menu, Notifications, Search, VideoCall } from "@material-ui/icons";
import React from "react";
import './Header.css';

function Header() {
  return (
    <div className='header'> 

      <div className='header__left'>
        <Menu />
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
          alt=''
        />
      </div>

      <div className='header__input'>
        <input placeholder="Search" type='text' />
        <Search className="header__inputButton"/>
      </div>

      <div className='header__icons'>
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar
          alt='Shibam Dhar'
          src='https://lh3.googleusercontent.com/a-/AOh14GiOAjMpz0JYeXr4rNMkTYxGtkCGwQLa59E6ExrM7Q?height=180&width=180'
        />
      </div>
    </div>
  );
}

export default Header;
