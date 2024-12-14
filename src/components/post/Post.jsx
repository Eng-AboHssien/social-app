import "./post.css";
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
const Post = ({ post }) => {
  const [like, setlike] = useState(post.like);
  const [isliked, setisliked] = useState(false);
  
  const likeHandler = () => {
    setlike(isliked ? like - 1 : like + 1);
    setisliked(!isliked);
  };
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              className="LikeIcon"
              alt=""
              onClick={likeHandler}
            />
            <img
              src="assets/heart.png"
              className="LikeIcon"
              alt=""
              onClick={likeHandler}
            />
            <span className="postlikeCounter">{like} Pepole like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
