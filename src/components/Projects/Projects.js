import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectVideoCard from "./ProjectVideoCards";

import Particle from "../Particle";

import ttGroup from "../../Assets/Projects/ttGroup.png";
import iflex from "../../Assets/Projects/iflex.jpg";
import ourclass from "../../Assets/Projects/ourclass.jpg";
import itadvancedis from "../../Assets/Projects/itadvancedis.jpg";
import zeracafe from "../../Assets/Projects/zeracafe.jpg";
import jewelry from "../../Assets/Projects/ELIZ_Jewelry.png";
import vitallife from "../../Assets/Projects/vitallife.jpg"
import bknorway from "../../Assets/Projects/bknorway.jpg"
import bkbahamas from "../../Assets/Projects/bkbahamas.png"
import cospas from "../../Assets/Projects/cospas.jpg"
import mbrellafilms from "../../Assets/Projects/mbrellafilms.jpg"
import pbcert from "../../Assets/Projects/pbcert.jpg"
import scb from "../../Assets/Projects/scb.png"
import riotinto from "../../Assets/Projects/rio-tinto.png"
import ceetc from "../../Assets/Projects/ceetc.png"
import epass from "../../Assets/Projects/epass.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Jobs I <strong className="purple">Worked On </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className='project-card'>
          <ProjectVideoCard
            imgPath={scb}
            title="SCB Start BiZ"
            description="Bank Management System"
            isBlog={false}
            videoUrl="https://player.vimeo.com/video/1061161752"
          />
        </Col>  

        <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={vitallife}
             isBlog={false}
             title='Vital Life'
             description='Bumrungrad Hospital'
             link='https://www.vitallifeintegratedhealth.com/en'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={epass}
             isBlog={false}
             title='ePasslive'
             description='Event Ticketing Platform'
             link='https://www.epasslive.com/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={bkbahamas}
             isBlog={false}
             title='BurgerKing'
             description='BurgerKing Bahamas'
             link='https://www.burgerking.bs/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={bknorway}
             isBlog={false}
             title='BurgerKing'
             description='BurgerKing Norway'
             link='https://www.burgerking.no/'
           />
         </Col>

        

          {/* new */}
         
         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={pbcert}
             isBlog={false}
             title='PB Cert'
             description='Global Plant Base Certification'
             link='https://client.globalplantbased.com/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={cospas}
             isBlog={false}
             title='Cospas Sarsat INT'
             description='Satellite-aided search and rescue '
             link='https://cospas-sarsat.int/en/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={ceetc}
             isBlog={false}
             title='CEETC '
             description='Centre for the English Exam for Teacher Certification'
             link='https://www.ceetc.ca/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={riotinto}
             isBlog={false}
             title='Rio Tinto'
             description="QMP - Quebec Metal Powders "
             link='https://www.iflex2u.com/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={ttGroup}
             isBlog={false}
             title='TT Group'
             description='Construction Company'
             link='https://www.ttgroup.co.th/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={mbrellafilms}
             isBlog={false}
             title='Mbrellafilms'
             description='Production House'
             link='https://mbrellafilms.com/'
           />
         </Col>

         <Col md={4} className='project-card'>
           <ProjectCard
             imgPath={zeracafe}
             isBlog={false}
             title='Zeracafé'
             description='Canadian Non-Profit Charity Café'
             link='https://zeracafe.ca/'
           />
         </Col>

        

      
       </Row>
      </Container>
    </Container>
  );
}

export default Projects;
