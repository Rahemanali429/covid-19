import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
        <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Who built this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by Rahemanali Momin. A software engineer and content
          creator.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can connect me via Instagram{" "}
          <a href="https://instagram.com/r._a._momin?igshid=imxb8oui2mti" target="_blank">
            here
          </a>
          .
        </div>
        <br />
        <h4>You can connect me via WhatsApp</h4>
        <div style={{ fontSize: "20px" }}>
          Click{" "}
          <a
            href="https://wa.me/qr/QLKNUX25HLNQH1"
            target="_blank"
          >
            here
          </a>{" "}
          will redirect you to my WhatsApp.
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
