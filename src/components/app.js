import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Firebase.
import { firebaseApp, features } from "./../firebase/app";

import "./app.scss";
import "./../routes/routes.scss";

import Educations from "../routes/education";
import Projects from "../routes/projects";
import Experience from "../routes/experience";
import About from "../routes/about";
import Header from "./header";
import Awards from "../routes/awards";
import Footer from "./footer";

export default class App extends Component {
  state = {
    isSignedIn: undefined
  };

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user });
      });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  /**
   * @inheritDoc
   */
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <section className="app-body">
          <About />
          <Experience />
          <Projects />
          <Educations />
          <Awards />
          </section>
          <Footer features={features} />
        </div>
      </Router>
    );
  }
/**
 * 
 * 
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Styles
import styles from "./app.css"; // This uses CSS modules.
import "./firebaseui-styling.global.css"; // Import globally.

 * 
 * uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: (result) => {
              console.log({signInSuccessWithAuthResult: result});
              return false
          },
        },
      };
 * 
 *  <div className={styles.container}>
            <div className={styles.logo}>
              <i className={styles.logoIcon + ' material-icons'}>photo</i> My App
            </div>
            <div className={styles.caption}>This is a cool demo app</div>
            {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
              <div>
                <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig}
                                    firebaseAuth={firebaseApp.auth()}/>
              </div>
            }
            {this.state.isSignedIn &&
              <div className={styles.signedIn}>
                Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
                <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
              </div>
            }
          </div>
 */
