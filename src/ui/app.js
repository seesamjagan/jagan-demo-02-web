import React, { Component } from "react";
// Firebase.
import { features, firebaseApp } from "../firebase/app";
import { store } from "../store";
import { authStateChangeAction } from "../store/reducers/auth";
import "./app.scss";
import Footer from "./layout/footer";
import Header from "./layout/header";
import About from "./routes/about";
import Awards from "./routes/awards";
import Educations from "./routes/education";
import Experience from "./routes/experience";
import Projects from "./routes/projects";
import "./routes/routes.scss";


export default class App extends Component {

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged(user => {
        console.log("onAuthStateChanged", {user})
        store.dispatch(authStateChangeAction(user));
      });

      this.unSubscribeStoreChange = store.subscribe(this.onStoreChange);
  }

  onStoreChange = () => {
    this.setState({});
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
    this.unSubscribeStoreChange();
  }

  /**
   * @inheritDoc
   */
  render() {
    const { auth } = store.getState();
    /* <Router> */
    return (
      <div className="app">
        <Header onLogin={this.onLoginClick} auth={auth} />
        <section className="app-body">
          <About />
          <Experience />
          <Projects />
          <Educations />
          <Awards />
        </section>
        <Footer features={features} />
      </div>
    );
    /* </Router> */
  }
}