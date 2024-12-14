import "./register.css";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with Friends and the World around you on Lamasocial
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="User Name" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="password" className="loginInput" />
              <input placeholder="password again" className="loginInput" />
              <button className="loginBotton">Sign Up</button>
              <button className="loginRegristerButton">Log into Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
