import "./online.css";
const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarfriend">
        <div className="rightbarprofileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarprofileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
