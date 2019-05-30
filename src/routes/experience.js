import React from "react";
import Panel from "../components/containers/panel";
import { db } from "../firebase/app";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store";
import { updateExperienceAction } from "../store/reducers/experience";

import "./experience.scss";

export class ExperienceUI extends React.Component {
  state = {
    loading: false,
    error: null
  };

  componentDidMount() {
    if (this.props.experience.data === null) {
      this.loadExperience();
    }
  }

  loadExperience = () => {
    this.setState({ loading: true });

    db.collection("experience")
      .orderBy("start", "desc")
      .get()
      .then(querySnapshot => {
        //console.log({ querySnapshot });
        let data = [];
        querySnapshot.forEach(doc => {
          //console.log({ doc });
          data.push({ ...doc.data(), id: doc.id });
        });
        console.log({ data: JSON.stringify(data) });
        this.props.dispatch(updateExperienceAction(data));
      })
      .catch(reason => {
        this.setState({
          error: reason
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  };
  render() {
    const {
      state: { error, loading },
      props: {
        experience: { data }
      }
    } = this;

    return (
      <Panel title="Experience" className="card h100 auto-scroll">
        <p>
          <img src="./assets/images/LearningPath.png" alt="experience" />
        </p>
        {loading ? (
          <div>Loading... </div>
        ) : (
          <div>
            {data &&
              data.map((exp, i) => {
                return <Exp data={exp} key={i} />;
              })}
          </div>
        )}
      </Panel>
    );
  }
}

const Exp = ({ data }) => (
  <div className="experience">
    <h3>{data.company}</h3>
    <h2>{data.title}</h2>
    <div>
      <span>From: </span> <FSDate data={data.start} />
      <span> To: </span>{" "}
      {data.current ? <span>Current</span> : <FSDate data={data.end} />}
    </div>
    <div>
      <span>Location: </span>
      <span>{data.location}</span>
    </div>
  </div>
);

const FSDate = ({ data }) => {
  let d = new Date(data.seconds * 1000);
  return (
    <span>
      {d.getMonth() + 1} / {d.getFullYear()}
    </span>
  );
};

export const Experience = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceUI);

export default Experience;
