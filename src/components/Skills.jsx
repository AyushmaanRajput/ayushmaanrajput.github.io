import React from "react";
import styled from "styled-components";
import Ticker from "framer-motion-ticker";

export const Skills = () => {
  return (
    <SKILLS id="skills">
      <h3>My Stack</h3>
      <div className="skills-row">
        <Ticker duration={60} direction={-1}>
          <div className="skills-card">
            <img src="/HTML.svg" className="skills-card-img" />
            <p className="skills-card-name">HTML</p>
          </div>
          <div className="skills-card">
            <img src="/CSS.svg" className="skills-card-img" />
            <p className="skills-card-name">CSS</p>
          </div>
          <div className="skills-card">
            <img src="/JS.svg" className="skills-card-img" />
            <p className="skills-card-name">JAVASCRIPT</p>
          </div>
          <div className="skills-card">
            <img src="/GIT.svg" className="skills-card-img" />
            <p className="skills-card-name">GIT</p>
          </div>
          <div className="skills-card">
            <img src="/Mongo.svg" className="skills-card-img" />
            <p className="skills-card-name">MongoDB</p>
          </div>
          <div className="skills-card">
            <img src="/Typescript.svg" className="skills-card-img" />
            <p className="skills-card-name">TypeScript</p>
          </div>
        </Ticker>
      </div>
      <div className="skills-row">
        <Ticker duration={60} direction={1} className="container">
          <div className="skills-card">
            <img src="/React.svg" className="skills-card-img" />
            <p className="skills-card-name">REACT</p>
          </div>
          <div className="skills-card">
            <img src="/logos_redux.svg" className="skills-card-img" />
            <p className="skills-card-name">REDUX</p>
          </div>
          <div className="skills-card">
            <img src="/Node.svg" className="skills-card-img" />
            <p className="skills-card-name">NODEJS</p>
          </div>
          <div className="skills-card">
            <img src="/Express.svg" className="skills-card-img" />
            <p className="skills-card-name">EPXRESS</p>
          </div>
          <div className="skills-card">
            <img src="/Mongoose.svg" className="skills-card-img" />
            <p className="skills-card-name">Mongoose</p>
          </div>
          <div className="skills-card">
            <img src="/Framer.svg" className="skills-card-img" />
            <p className="skills-card-name">Framer</p>
          </div>
        </Ticker>
      </div>
    </SKILLS>
  );
};

const SKILLS = styled.section`
  grid-area: skills;
  background: var(--background-light);
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  h3 {
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  .skills-row {
    width: 80%;
    margin-inline: auto;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .skills-card {
      background: var(--background-lightest);
      padding: 0.75rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-inline: 1rem;
      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 1rem;
    .skills-row {
      width: 90%;
      .skills-card {
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .skills-row {
      width: 100%;
      .skills-card {
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .skills-row {
      .skills-card {
        border-radius: 0.25rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
