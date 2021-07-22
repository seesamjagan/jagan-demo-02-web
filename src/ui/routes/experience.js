import React, { Fragment } from "react";
import { connect } from "react-redux";
import { db } from "../../firebase/app";
import { mapDispatchToProps, mapStateToProps } from "../../store";
import { updateExperienceAction } from "../../store/reducers/experience";
import { Icons } from "../utils";
import "./experience.scss";

export class ExperienceUI extends React.Component {
  state = {
    loading: false,
    error: null,
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
      .then((querySnapshot) => {
        //console.log({ querySnapshot });
        let data = [];
        querySnapshot.forEach((doc) => {
          //console.log({ doc });
          data.push({ ...doc.data(), id: doc.id });
        });

        let map = data.reduce((map, exp, index) => {
          let org = map[exp.company] || {
            path: [],
            titleIndex: index,
            company: exp.company,
          };
          org.path.push(exp);

          return { ...map, [exp.company]: org };
        }, {});
        let exp = Object.keys(map)
          .map((key) => map[key])
          .sort((a, b) => a.titleIndex > b.titleIndex);
        console.log({ data, map, exp });
        this.props.dispatch(updateExperienceAction(exp));
      })
      .catch((reason) => {
        this.setState({
          error: reason,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };
  render() {
    const {
      state: { loading },
      props: {
        experience: { data },
      },
    } = this;

    return (
      <Fragment>
        <header className="header">
          <h1 className="title">
            <Icons.Experience /> Experience
          </h1>
        </header>
        {loading ? (
          <div>Loading... </div>
        ) : (
          <div className="content">
            {data &&
              data.map((exp, i) => {
                return <OrgExp data={exp} key={i} />;
              })}
          </div>
        )}
      </Fragment>
    );
  }
}

const OrgExp = ({ data: { company, path } }) => (
  <div className="experience">
    <h3>{company}</h3>
    {path.map((path) => (
      <ExpPath data={path} key={path.title} />
    ))}
  </div>
);

const ExpPath = ({ data }) => {
  return (
    <div className="title">
      <h3>{data.title}</h3>
      <div className="info">
        <span>From: </span> <FSDate data={data.start} />
        <span> To: </span>{" "}
        {data.current ? <span>Current</span> : <FSDate data={data.end} />}
      </div>
      <div className="info">
        <span>Location: </span>
        <span>{data.location}</span>
      </div>
    </div>
  );
};

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
