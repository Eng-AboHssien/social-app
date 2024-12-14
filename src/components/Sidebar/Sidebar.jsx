import "./Sidebar.css";
import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";

import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOffOutlined,
} from "@mui/icons-material";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListitemText">Feed</span>
          </li>
          <li className="sidebarListitem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListitemText">Chats</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListitemText">Videos</span>
          </li>
          <li className="sidebarListitem">
            <Group className="sidebarIcon" />
            <span className="sidebarListitemText">Groups</span>
          </li>
          <li className="sidebarListitem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListitemText">Bookmarks</span>
          </li>
          <li className="sidebarListitem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListitemText">Questions</span>
          </li>
          <li className="sidebarListitem">
            <WorkOffOutlined className="sidebarIcon" />
            <span className="sidebarListitemText">Jobs</span>
          </li>
          <li className="sidebarListitem">
            <Event className="sidebarIcon" />
            <span className="sidebarListitemText">Events</span>
          </li>
          <li className="sidebarListitem">
            <School className="sidebarIcon" />
            <span className="sidebarListitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarfriendsList">
          {Users.map((u) => (
            <CloseFriends user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
