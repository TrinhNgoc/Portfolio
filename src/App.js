import React, { Component } from "react";
import "tachyons";
import "./App.css";
import Typed from "react-typed";
import Project from "./components/projects/project";
import Icons from "./components/icons/icons";
import RF from "./images/robofriends.PNG";
import SB from "./images/smart-brain.PNG";
import waimea from "./images/waimeavalley.PNG";
import Speedi from "./images/speedi.PNG";
import SpeediPDF from "./images/SpeediShuttle.pdf";
import tank from "./images/tank.PNG";
import responsive from "./images/responsive.svg";
import learn from "./images/learn.svg";
import programmer from "./images/programmer.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jenny Nguyen</h1>
          <Typed
            strings={[
              "Front-End Developer",
              "Web Developer",
              "Software Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <br />
        </header>
        <main>
          <section className="mw9 center cf pv5 ph7-l ph3">
            <h1 className="tc f3 ttu fw6 tracked mb4 avenir">About Me</h1>
            <p className="tc">
              A creative and motivated developer who loves to build and design
              modern and responsive websites.
            </p>
            <div className="ph3-ns">
              <div className="cf ph2-ns">
                <div className="fl w-100 w-third-ns pa4">
                  <img
                    src={programmer}
                    className="about-img"
                    alt="Programmer"
                  />
                  <div className="tc pv3">
                    <h3 className="tc ttu fw6 tracked avenir">Developer</h3>
                    <p>
                      Focusing on responsive and clean web design and software
                      applications
                    </p>
                  </div>
                </div>
                <div className="fl w-100 w-third-ns pa4">
                  <img
                    src={responsive}
                    className="about-img"
                    alt="Responsive Design"
                  />
                  <div className="tc pv3">
                    <h3 className="tc ttu fw6 tracked avenir">Designer</h3>
                    <p>Making UX/UI simple and clean yet creative</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-ns pa4">
                  <img src={learn} className="about-img" alt="Learner" />
                  <div className="tc pv3">
                    <h3 className="tc ttu fw6 tracked avenir">
                      Passionate Learner
                    </h3>
                    <p>
                      I love learning new technologies to help me grow as a
                      better developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="tc f3 ttu fw6 tracked mb4 avenir">Skills</h1>
            <Icons
              icons={[
                "devicon-html5-plain colored",
                "devicon-css3-plain colored",
                "devicon-sass-original colored",
                "devicon-javascript-plain colored",
                "devicon-nodejs-plain colored",
                "devicon-react-original colored",
                "devicon-redis-plain colored",
                "devicon-docker-plain colored",
                "devicon-postgresql-plain colored",
                "devicon-amazonwebservices-original colored",
                "devicon-cplusplus-plain colored",
                "devicon-csharp-plain colored",
                "devicon-photoshop-plain colored",
                "devicon-illustrator-plain colored",
              ]}
            />
            <div className="center" />
          </section>
          <section className="cf pv5 b--black-05 ph6-l bg-near-white">
            <h1 className="tc f3 ttu fw6 tracked mb4 avenir">Projects</h1>
            <div className="flex flex-wrap mw9 center ph3">
              <Project
                title="Smart Brain"
                description="A facial recognition app with Clarifai API"
                image={SB}
                icons={[
                  "devicon-react-original colored",
                  "devicon-bootstrap-plain colored",
                  "devicon-redis-plain colored",
                  "devicon-docker-plain colored",
                  "devicon-nodejs-plain colored",
                  "devicon-heroku-original colored",
                  "devicon-postgresql-plain colored",
                  "devicon-amazonwebservices-original colored",
                ]}
                alt="Smart Brain"
                link="https://github.com/TrinhNgoc/Smart-Brain"
              />
              <Project
                title="Robofriends"
                description="An app that searches for robot users"
                image={RF}
                icons={["devicon-react-original colored"]}
                alt="Robofriends"
                link="https://trinhngoc.github.io/Robofriends/"
              />
              <Project
                title="Waimea Valley"
                description="Website redesign built with AirshipCMS"
                image={waimea}
                icons={[
                  "devicon-html5-plain colored",
                  "devicon-css3-plain colored",
                  "devicon-sass-original colored",
                  "devicon-javascript-plain colored",
                ]}
                alt="Waimea Valley"
                link="https://www.waimeavalley.net/"
              />
              <Project
                title="SpeediShuttle"
                description="Website redesign"
                image={Speedi}
                icons={["devicon-illustrator-plain colored"]}
                alt="SpeediShuttle"
                link={SpeediPDF}
              />
            </div>
          </section>
          <section className="cf pv5 b--black-05 ph6-l">
            <h1 className="tc f3 ttu fw6 tracked mb4 avenir">
              Ongoing Projects
            </h1>
            <div className="flex flex-wrap mw9 center ph3">
              <Project
                title="BattleTank"
                description="An open-world head-to-head tank fight with simple AI, terrain, and advance control system in Unreal Engine 4"
                image={tank}
                icons={["devicon-cplusplus-plain colored"]}
                alt="Tank Game"
                link="https://github.com/TrinhNgoc/BattleTank"
              />
            </div>
          </section>
        </main>
        <footer className="tc-l bg-center cover">
          <div className="w-100 ph3 pv5 flex justify-center">
            <a
              className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2"
              href="https://github.com/TrinhNgoc"
              title="GitHub"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
              </svg>
              <span className="f6 ml3 pr2">GitHub</span>
            </a>
            <a
              className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2"
              href="https://www.linkedin.com/in/ngoctrinh/"
              title="LinkedIn"
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path
                  d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                  fillRule="nonzero"
                />
              </svg>
              <span className="f6 ml3 pr2">LinkedIn</span>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
