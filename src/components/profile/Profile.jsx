import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                className="profileCoverImage"
                alt=""
              />
              <img
                src="assets/person/7.jpeg"
                className="profileUserImage"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileuserName">safak kalugus</h4>
              <span className="profileInfoDesc">Hello my Friends !</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
