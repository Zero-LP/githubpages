import { useState } from "react";

function App() {
  return (
    <main
      style={{
        width: "400px",
        padding: "30px",
        background: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <Avatar pic="https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg" />
      <Intro
        name="Rayhana Ibrahim"
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, qui? Eum
        officia eaque molestias odio nobis deserunt porro repudiandae excepturi
        deleniti eos! Alias odio consectetur cumque aut numquam eos
        consequuntur."
      />
      <Skillset
        skills={[
          { skill: "Reactjs", emoji: "🫥" },
          { skill: "HTML", emoji: "😱" },
          { skill: "JavaScript", emoji: "🥶" },
        ]}
      />
    </main>
  );
}

export default App;

function Avatar({ pic }) {
  return <img style={{ height: "300px" }} src={pic} alt="avatar pic" />;
}

function Intro({ name, intro }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{intro}</p>
    </>
  );
}

function Skillset({ skills }) {
  let colors = ["blue", "red", "purple"];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {skills.map(({ skill, emoji }, index) => {
        return (
          <div
            style={{
              backgroundColor: colors[index],
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <span style={{ marginRight: "20px" }}>{skill}</span>
            <span>{emoji}</span>
          </div>
        );
      })}
    </div>
  );
}
