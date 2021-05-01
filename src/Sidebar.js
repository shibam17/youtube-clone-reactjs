import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <hr />
      <Sidebar Icon={VideoLibrary} title='Library' />
      <Sidebar Icon={History} title='History' />
      <Sidebar Icon={OndemandVideo} title='Your Video' />
      <Sidebar Icon={WatchLater} title='Watch Later' />
      <Sidebar Icon={ThumbUpAltOutlined} title='Liked Video' />
      <Sidebar Icon={ExpandMoreOutlined} title='Show More' />
      <hr />
    </div>
  );
}

export default Sidebar;
