import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memories from "../../Assets/Projects/memories.png";
import gym from "../../Assets/Projects/gym-shark.png";
import minecraft from "../../Assets/Projects/minecraft.png";
import dice from "../../Assets/Projects/dice.png";
import covid from "../../Assets/Projects/covid.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories App"
              description="This is my Final Project at Fullstack Bootcamp MERN Project Mobile Friendly. a project that anyone could share his memory/story and create a post about it. this way anyone can see each others posts ,can view like and comment on it."
              link="https://github.com/LOCO185/Memories-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Shark App"
              description="I have always been passionate about fitness and coding. I wanted to create an App using React.JS that can help people who want to get into fitness by browsing workouts and check the right form, you can pick and choose your workouts with two categories (men's/women's)."
              link="https://github.com/LOCO185/Gym-Shark-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minecraft}
              isBlog={false}
              title="2D Minecraft"
              description="a 2d look A like minecraft , built as a weekend project in Fullstack course.
              start crafting with the specific tool , and build your own place.
              things I learned in this project :
              creating HTML through JavaScript vanilla commands.
              manipulate the DOM.
              use pseudo code.
              creating 2X2 matrix using two for loops.
              media responsive for mobiles."
              link="https://github.com/LOCO185/Minecraft-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dice Game"
              description="Roll Dice : Picks a random number between 1 to 6, and then display in the gameSettings container two images of the dice according to the selected number
              Hold Function : Adds the the currentScore to the totalplayer score and then passes the turn to the other player
              New Game : Easiest function you can come across.. just re set the state to its default"
              link="https://github.com/LOCO185/Dice-Game-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Tracker"
              description="I intended to apply the knowledges that I acquired regarding frontend web development using a JS framework, React,
              and making API calls in order to retrieve some data. This project has the purpose of tracking Covid-19 cases (Confirmed, Active, Deaths, Recoverd) around the world,
              showing the frontend skills that I developped as a fullstack web developer. and its mobile friendly."
              link="https://github.com/LOCO185/Covid-19-tracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Matching App"
              description="Simple macthing application, we did it as a weekend project at the Full Stack bootcamp to learn and dominate React reusable components."
              link="https://github.com/LOCO185/matching-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
