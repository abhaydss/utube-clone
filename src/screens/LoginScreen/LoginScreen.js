import React, { useEffect } from "react";
import "./loginScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
          alt=""
        />
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </div>
  );
};

export default LoginScreen;
