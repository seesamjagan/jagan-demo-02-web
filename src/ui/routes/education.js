import React from "react";
import { Icons } from "../utils";

const education = [
  {
    school: "Kumbakonam Govt Arts (Auto) College",
    degree: "MCA",
    fieldOfStudy: "Computer Application",
    start: 2004,
    end: 2007,
    grade: "80",
    activities: [],
    description: "Master Of Computer Application (MCA)",
    place: "Kumbakonam"
  },
  {
    school: "St. Josephs College of Science And Arts",
    degree: "BSc",
    fieldOfStudy: "Computer Science",
    start: 2001,
    end: 2004,
    grade: "68",
    activities: ["College Volleyball Team Player"],
    description: "B.Sc. Computer Science",
    place: "Cuddalore"
  },
  {
    school: "Fathima Matric Hr. Sec School",
    degree: "HSC",
    fieldOfStudy: "Mathematics and Computer Science",
    start: 2000,
    end: 2001,
    grade: "52",
    activities: ["School Volleyball Team Player"],
    description: "HSC in Mathematics and Computer Science",
    place: "Vriddhachalam"
  }
];

export default function Educations(props) {
  return (
    <>
      <h1><Icons.Education /> Education</h1>
      {education.map(edu => (
        <Education data={edu} key={edu.degree} />
      ))}
    </>
  );
}

/* 
export default function Educations(props) {
  return (
    <Panel iconFunction={Icons.Education} title="Education" className="card" titleId="education">
      <p>
        <img src="./assets/images/edu.png" alt="education" />
      </p>
      {education.map(edu => (
        <Education data={edu} key={edu.degree} />
      ))}
    </Panel>
  );
}
 */
const Education = ({
  data: {
    school,
    degree,
    fieldOfStudy,
    start,
    end,
    place,
    activities = [],
    description
  }
}) => {
  return (
    <div className="experience">
      <h3>{school}</h3>
      <h2>
        {degree}, {fieldOfStudy}
      </h2>
      <div>
        <span>{start}</span> - <span>{end}</span> @ <span>{place}</span>
      </div>
      {activities.length ? <div>Activities: {activities}</div> : null}
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
};
