import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handlePopUpLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mb-4 text-center">
      <div className="divider">OR</div>
      <button
        onClick={handlePopUpLogin}
        className="btn btn-circle btn-outline text-center"
      >
        G
      </button>
    </div>
  );
};

export default SocialLogin;
