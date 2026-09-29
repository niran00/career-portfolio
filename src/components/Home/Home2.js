import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/self-portrait.jpeg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaEnvelope, FaLine, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              <i>
                <b className="purple">
                  Software Engineer | Full-Stack Developer
                </b>
              </i>
              <br />
              <br />
              Passionate about building scalable and efficient web applications,
              I specialize in full-stack development with expertise in both{" "}
              <i>
                <b className="purple">frontend and backend technologies.</b>
              </i>
              <br />
              <br />
              With a strong foundation in{" "}
              <i>
                <b className="purple">
                  database structures, deployment, and staging,{" "}
                </b>
              </i>
              I bring a comprehensive approach to software engineering.
              <br />
              <br />
              My expertise spans across the{" "}
              <i>
                <b className="purple">MERN and MEAN stacks, </b>
              </i>
              allowing me to develop dynamic, high-performing applications.
              <br />
              <br />I am proficient in{" "}
              <i>
                <b className="purple">
                  PHP, JavaScript, Node.js, HTML, and CSS{" "}
                </b>
              </i>
              with additional experience in a multitude of other languages and
              technologies, such as{" "}
              <i>
                <b className="purple">
                  Bootstrap, Tailwind, C#, Java, Python, and Shell scripting .
                </b>
              </i>
              <br />
              <br />I am well-versed in{" "}
              <i>
                <b className="purple">
                  Object-Oriented Programming (OOP), RESTful APIs, and essential
                  coding conventions{" "}
                </b>
              </i>
              that ensure scalable and maintainable code.
              <br />
              <br />
              From crafting custom <b className="purple">WordPress</b> websites
              to building modern applications with{" "}
              <i>
                <b className="purple">React.js, Angular, and Node.js, </b>
              </i>
              I am dedicated to delivering high-quality software solutions that
              align with both user needs and business objectives.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niran00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:niran.millet@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://line.me/ti/p/3s3L25gklY"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLine />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/niranmillet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">contact </span> me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
