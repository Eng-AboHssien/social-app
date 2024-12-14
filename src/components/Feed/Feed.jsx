import Post from "../post/Post";
import Share from "../shear/Share";
import { Posts } from "../../dummyData";

import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedwapper">
        <Share />
        {Posts.map((p) => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
