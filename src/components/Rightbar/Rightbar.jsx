import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./Rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b>and <b>3 other friends</b> has birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">On Line Friends</h4>
        <ul className="rightbarfriendList">
          {Users.map((u) => (
            // user = {u} تعني أن االيوسر الواحد وهو يو سياخذ اسم يوسر
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4>user information</h4>
        <div className="RightbarInfo">
          <div className="RightbarInfoItem">
            <span className="RightbarInfokey">City:</span>
            <span className="RightbarInfoValue">New York</span>
          </div>
          <div className="RightbarInfoItem">
            <span className="RightbarInfokey">From:</span>
            <span className="RightbarInfoValue">Madrid</span>
          </div>
          <div className="RightbarInfoItem">
            <span className="RightbarInfokey">RelationShip:</span>
            <span className="RightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              className="rightbarFollowingsIMG"
              alt=""
            />
            <span className="rightbarFolloeingName">Jone Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
