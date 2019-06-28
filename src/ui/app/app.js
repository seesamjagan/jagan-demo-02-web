import React, { useEffect, useState } from "react";
// Firebase.
import { features, firebaseApp } from "../../firebase/app";
import { store } from "../../store";
import { authStateChangeAction } from "../../store/reducers/auth";
import "./app.scss";
import Footer from "../layout/footer";
import Header from "../layout/header";
import About from "../routes/about";
import Awards from "../routes/awards";
import Educations from "../routes/education";
import Experience from "../routes/experience";
import Projects from "../routes/projects";
import "./routes/routes.scss";

export const App = (props) => {

  const [auth, setAuth] = useState(null);

  useEffect(()=>{
    //console.log("APP: componentDidMount/Update: register Auth Observer");
    const unregisterAuthObserver = firebaseApp
    .auth()
    .onAuthStateChanged(user => {
      //console.log("onAuthStateChanged", {user})
      store.dispatch(authStateChangeAction(user));
    });
    return () => {
      //console.log("APP: componentWillUnmount: unregisterAuthObserver");
      unregisterAuthObserver();
    }
  }, []);

  useEffect(()=>{
    //console.log("APP: componentDidMount/Update: subscribe to Store Change");
    const onStoreChange = () => {
      setAuth(store.getState().auth);
    }
    const unSubscribeStoreChange = store.subscribe(onStoreChange);
    return () => {
      //console.log("APP: comonentWillUnmount: unSubscribeStoreChange");
      unSubscribeStoreChange();
    };
  }, [auth]);

  return (
    <div className="app">
      <Header auth={auth} />
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
}