import React from "react";
import { Search, Person, Chat, CircleNotifications } from "@mui/icons-material";
import './Topbar.css'
const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchicon" />
          <input
            placeholder="search for posts, friends, photos"
            className="searchinput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <span className="topbarlink">HomePage</span>
        <span className="topbarlink">Timeline</span>
        <div className="tpobaricons">
          <div className="topbariconitem">
            <Person />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Chat />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <CircleNotifications />
            <span className="topbariconbadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
