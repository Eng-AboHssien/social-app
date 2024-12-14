import "./closeFriends.css";

const closeFriends = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendimg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default closeFriends;
