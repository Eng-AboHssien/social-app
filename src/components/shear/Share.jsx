import "./share.css";
import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="sharewapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
          <input
            type="text"
            placeholder="whats in your mind safak ?"
            className="sharInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareRow">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" htmlColor="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Tage</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareBottom">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
