import React, { useState, useEffect, Component } from "react";
import "./header.scss";
import NavBar from "./nav-bar";
import { Icon } from "../utils";
import firebase from "firebase/app";
import { Popup } from "../containers/portal";
import { mapStateToProps, mapDispatchToProps } from "../../store";
import { connect } from "react-redux";
import { signInSuccesAction } from "../../store/reducers/auth";

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

export const Header = ({ auth }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(
    false
  );

  useEffect(() => {
    setShowEmailVerificationModal(auth ? !auth.emailVerified : false);
    return () => {
      console.log("Header unmounted");
    };
  }, [auth]);
/* 
  if (auth) {
    console.log(auth.toJSON());
  }
  console.log({
    showEmailVerificationModal,
    emailVerified: auth ? auth.emailVerified : "--"
  });
   */
  return (
    <>
      <header className="header">
        <a href="/" className="profile-picture">
          Jagan Langa
        </a>
        <h2 className="name">Jagan Langa</h2>
        <h2 className="title">Technical Architect</h2>
        <div className="action-icon">
          {auth ? (
            <span className="action" title={auth.displayName}>
              <Icon icon="user-circle-o" />
            </span>
          ) : null}
          {auth ? (
            <span className="action" onClick={signOut} title="Sign out">
              <Icon icon="sign-out" />
            </span>
          ) : (
            <span
              className="action"
              onClick={() => setShowLoginModal(true)}
              title="Sign in"
            >
              <Icon icon="sign-in" />
            </span>
          )}
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
    </>
  );
};

export default Header;

class VerifyEmailModal extends Component {
  onSend = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then((...params) => {
        console.log("onVerifyEmail", ...params);
      })
      .catch(err => {
        console.log("onVerifyEmail", err);
      })
      .finally(() => {
        let { onClose } = this.props;
        onClose && onClose();
      });
  };

  onSendLater = () => {
    let { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    let { show } = this.props;

    return (
      <Popup title="Verify Email" show={show}>
        <p>
          Seems you have not yet verified your email. Do you like us to re-send
          the verification email?{" "}
        </p>
        <div>
          <button onClick={this.onSend}>Send</button>
          <button onClick={this.onSendLater}>Later</button>
        </div>
      </Popup>
    );
  }
}

class LoginModal extends Component {
  onLoginClick = () => {
    let { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onSignInSucces)
      .catch(this.onSignInError);
  };
  onSignInSucces = user => {
    const { dispatch, onClose } = this.props;
    dispatch(signInSuccesAction(user));
    onClose();
  };
  onSignInError = error => {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    // ...
    console.error(error);
  };
  onInptChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    });
  };
  state = {
    email: "",
    password: ""
  };
  render() {
    let {
      props: { show, onClose },
      onLoginClick
    } = this;

    return (
      <Popup title="sign-in" show={show}>
        <input placeholder="username" onChange={this.onInptChange} id="email" />
        <input
          placeholder="password"
          onChange={this.onInptChange}
          id="password"
          type="password"
        />
        <div>
          <button onClick={onLoginClick}>sign in</button>
          <button onClick={onClose}>cancel</button>
        </div>
      </Popup>
    );
  }
}

const LoginModalUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
