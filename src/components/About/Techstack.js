import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
  DiWordpress,
  DiGithubBadge,
  DiPhp,
  DiMysql,
  DiAngularSimple,
  BsLine,
  DiBootstrap,
  DiTerminal,
  DiPostgresql,
  DiDocker,
  DiAws,
  DiGoogleAnalytics,
} from "react-icons/di";
import {
  SiAmazonwebservices,
  SiKentico,
  SiGooglesearchconsole,
  SiTypescript,
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiStrapi,
  SiMedusa,
  SiNextdotjs,
  SiSanity,
  SiNpm,
  SiPostman,
  SiNetlify,
  SiCloudflare,
  SiNginx,
  SiApache,
  SiSass,
  SiLinux,
} from "react-icons/si";
import { FaLine, FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
        <SiStrapi />
        <p>Strapi</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiSanity />
        <p>Santity</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiMedusa />
        <p>Medusa.js</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiKentico />
        <p>Kentico</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiWordpress />
        <p>Wordpress</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiAngularSimple />
        <p>Angular</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiJsBadge />
        <p>Javascript</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiTypescript />
        <p>Typescript</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiExpress />
        <p>Express.js</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiPhp />
        <p>PHP</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiBootstrap />
        <p>Bootstrap</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwind</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiSass />
        <p>SASS</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiMysql />
        <p>Mysql</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiPostgresql />
        <p>Postgres</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDb</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiNginx />
        <p>Nginx</p>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiApache />
        <p>Apache</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiGithubBadge />
        <p>Github</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <FaAws />
        <p>AWS</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiCloudflare />
        <p>Cloudflare</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiNetlify />
        <p>Netlify</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiDocker />
        <p>Docker</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <DiGoogleAnalytics />
        <p>Google Analytics</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiGooglesearchconsole />
        <p>Google Search Console</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiNpm />
        <p>NPM</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <FaLine />
        <p>LIFF/LINE Apps</p>
      </Col>

      <Col xs={5} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
    </Row>
  );
}

export default Techstack;
