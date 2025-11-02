import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import ThreeJSAnimation from "./ThreeJSAnimation";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <ThreeJSAnimation></ThreeJSAnimation>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            
            {" I'm"}
            <span className="intro-name">{" dirgha"}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Turning Vision into code.</div>
          <div className="intro-desc">
          I'm a software engineer with a background in building scalable systems, AI applications, cloud solutions, and data-driven tools. I enjoy working on projects that turn innovative ideas into practical, impactful solutions that make a difference in the real world.
          </div>
          <a
            href="mailto:jivanidirgha@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Connect!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
