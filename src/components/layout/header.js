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

const AuthActions = ({ auth, setShowLoginModal, setShowSignUpModal }) => {
  if (auth) {
    return (
      <>
        <span className="action" title={auth.displayName}>
          <Icon icon="user-circle-o" />
        </span>
        <span className="action" onClick={signOut} title="Sign out">
          <Icon icon="sign-out" />
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
          <Icon icon="user-plus" />
        </span>
        <span
          className="action"
          onClick={() => setShowLoginModal(true)}
          title="Sign in"
        >
          <Icon icon="sign-in" />
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
      <Popup
        title="Verify Email"
        icon={<Icon icon="paper-plane" />}
        show={show}
        showClose
        onClose={this.onSendLater}
      >
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
      <Popup
        title="sign-in"
        icon={<Icon icon="sign-in" />}
        show={show}
        showClose
        onClose={onClose}
      >
        <div className="form">
          <div className="form-item">
            <label>Email</label>
            <input
              placeholder="username"
              onChange={this.onInptChange}
              id="email"
            />
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              placeholder="password"
              onChange={this.onInptChange}
              id="password"
              type="password"
            />
          </div>
          <div className="form-item footer">
            <button onClick={onLoginClick}>sign in</button>
            <button onClick={onClose}>cancel</button>
          </div>
        </div>
      </Popup>
    );
  }
}

const SignUpModal = ({ show, onClose }) => {
  useEffect(() => {
    show && document.querySelector("#displayName").focus();
    return () => {
      // TODO :: clean up
    };
  }, [show]);

  const signUp = async () => {
    let displayName = document.querySelector("#displayName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    if (!email) {
      alert("email is required");
    } else if (!password) {
      alert("password is required");
    } else if (password !== confirmPassword) {
      alert("password and confirm password is not same!");
    } else {
      try {
        let {user} = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await user.sendEmailVerification();
        await user.updateProfile({
          displayName: displayName || email
        });
        onClose();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Popup
      title="sign-up"
      icon={<Icon icon="user-plus" />}
      show={show}
      showClose
      onClose={onClose}
    >
      <div className="form">
        <div className="form-item">
          <label htmlFor="displayName">Display Name</label>
          <input
            id="displayName"
            type="text"
            placeholder="eg. Jagan Langa S."
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="eg. username@domain.com"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="secret" />
        </div>
        <div className="form-item">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="repeat secret"
          />
        </div>
        <div className="form-item footer">
          <button onClick={signUp}>sign up</button>
          <button onClick={onClose}>cancel</button>
        </div>
      </div>
    </Popup>
  );
};

const LoginModalUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
