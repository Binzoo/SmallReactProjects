import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar imgaeUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="data">
        <Intro
          name="Binamra Thapa"
          description="lorem hello everytone my name is binamra thapa. im 21 YEAR OLD.
          OFC I GOT THIS AND CAN DO BETTER."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillsLis={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <>
      <img className="avatar" src={props.imgaeUrl} alt="" />
    </>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList({ skillsLis }) {
  return (
    <div className="skill-list">
      {skillsLis.map((value) => (
        <Skills
          key={value.skill}
          skill={value.skill}
          color={value.color}
          skillLevel={value.level}
        />
      ))}

      {/* <Skills skill={skillsLis[0].skill} color="blue" /> */}
    </div>
  );
}

function Skills(props) {
  return (
    <div style={{ background: `${props.color}` }} className="skill">
      <span>{props.skill}</span>

      <span>
        {props.skillLevel == "advanced"
          ? "💪"
          : props.skillLevel == "intermediate"
          ? "👍"
          : props.skillLevel == "beginner"
          ? "🧒"
          : ""}
      </span>
    </div>
  );
}

export default App;
