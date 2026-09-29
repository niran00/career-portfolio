import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body className="p-0 p-md-3">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a<span className="purple"> Thai-French </span>
            software engineer from{" "}
            <span className="purple"> Bangkok, Thailand.</span>
            <br />
            My interest in computers began at an early age, and what started as
            a hobby evolved into a full-time career in software development.
            With approximately <b className="purple">
              10 years of experience
            </b>{" "}
            in the programming industry.
            <br />
            <br />
            Aside from coding, some other activities that I love doing:
          </p>
          <ul>
            <li className="about-activity">🏍️ Motorcycling</li>
            <li className="about-activity">🥘 Cooking</li>
            <li className="about-activity">🌏 Travelling</li>
            <li className="about-activity">🎮 Gaming</li>
            <li className="about-activity">🕺🏻 Dancing</li>
          </ul>

          <p
            style={{
              marginBlockEnd: 0,
              color: "rgb(155 126 172)",
              textAlign: "end",
              fontSize: "16px",
            }}
          >
            "Simple is better than complex,<br></br>
            Complex is better than complicated."
          </p>
          <footer
            style={{
              textAlign: "end",
              fontSize: "12px",
              fontStyle: "italic",
              marginTop: "10px",
            }}
            className="blockquote-footer"
          >
            The Zen of Python
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
