import React, { useState, useEffect } from "react";
import "./header.scss";
import NavBar from "./nav-bar";
import { Icons } from "../utils";
import firebase from "firebase/app";
import { VerifyEmailModal, SignUpModal, LoginModalUI } from "../popup";

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch(err => {
      console.log({ msg: "signout error", err });
    });
};

const AuthActions = ({ auth, setShowLoginModal, setShowSignUpModal }) => {
  if (auth) {
    return (
      <>
        <span className="action" title={auth.displayName}>
          <Icons.ProfileSettings />
        </span>
        <span className="action" onClick={signOut} title="Sign out">
          <Icons.SignOut />
        </span>
      </>
    );
  } else {
    return (
      <>
        <span
          className="action"
          onClick={() => setShowSignUpModal(true)}
          title="Sign up"
        >
          <Icons.SignUp />
        </span>
        <span
          className="action"
          onClick={() => setShowLoginModal(true)}
          title="Sign in"
        >
          <Icons.SignIn />
        </span>
      </>
    );
  }
};

export const Header = ({ auth }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(
    false
  );
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    setShowEmailVerificationModal(auth ? !auth.emailVerified : false);
    // auth && console.log(auth.toJSON());
    return () => {
      console.log("Header unmounted");
    };
  }, [auth]);

  let authActionProps = {
    auth,
    setShowLoginModal,
    setShowSignUpModal
  };
  return (
    <>
      <header className="header">
        <a href="/" className="profile-picture">
          Jagan Langa
        </a>
        <h2 className="name">Jagan Langa</h2>
        <h2 className="title">Technical Architect</h2>
        <div className="action-icon">
          <AuthActions {...authActionProps} />
        </div>
      </header>
      <NavBar />
      <LoginModalUI
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <VerifyEmailModal
        show={showEmailVerificationModal}
        onClose={() => setShowEmailVerificationModal(false)}
      />
      <SignUpModal
        show={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      />
    </>
  );
};

export default Header;
