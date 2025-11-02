import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I'm currently pursuing my Master's in Computer Science at
        <a href="https://www.bu.edu/"> Boston University</a>, with a strong interest in AI, data, and building things that solve real problems. Over the past few years, I've gained hands - on experience through internships and projects where I got to apply my skills in machine learning,
        data engineering, and software development.
      </p>
    );
    const availability = (
      <p>
        I'm actively seeking internship and full-time opportunities starting January 2026, where I can contribute my skills and continue growing as an engineer.
      </p>
    );
    const two = (
      <p>
        Outside of code, I love creating small games
        for fun, diving into space documentaries, and hunting down new coffee spots whenever I get the chance.
      </p>
    );

    const tech_stack = ["Python", "Java", "JavaScript", "React.js", "SQL", "C++"];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title"># about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {[availability]}
              {"Here are some Languages I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Dirgha Jivani" src={"/assets/dir.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
