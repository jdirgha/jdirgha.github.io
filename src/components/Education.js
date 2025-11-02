import React from "react";
import "../styles/Education.css";
import FadeInSection from "./FadeInSection";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
  }

  render() {
    const education = {
      "Boston University": {
        degree: "Masters of Science in Computer Science",
        duration: "Sept 2024 - Jan 2026",
        location: "Boston, MA",
        coursework: [
          "Database Design and Implementation for Business",
          "Software Engineering",
          "Generative AI",
          "Data Mining",
          "Data Science",
          "Deep Reinforcement Learning",
          "Big Data Analytics"
        ]
      },
      "Nirma University": {
        degree: "Bachelors of Technology in Computer Science and Engineering",
        duration: "Oct 2020 - June 2024",
        location: "India",
        coursework: [
          "Data Structures and Algorithm",
          "Object Oriented Programming",
          "Computer Networks",
          "Operating System",
          "Web Technologies",
          "Machine Learning",
          "Deep Learning",
          "Financial Management",
          "Agile Software Development"
        ]
      }
    };

    return (
      <div id="education">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title"># education</span>
          </div>
        </FadeInSection>
        <div className="education-content">
          <div className="education-container">
            <ul className="education-grid">
              {Object.keys(education).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li className="education-card">
                    <div className="card-header">
                      <div className="school-icon">🎓</div>
                      <div className="school-name">{key}</div>
                    </div>
                    <div className="card-content">
                      <div className="degree-header">
                        <div className="degree-title">{education[key]["degree"]}</div>
                        <div className="location">📍 {education[key]["location"]}</div>
                      </div>
                      <div className="duration">{education[key]["duration"]}</div>
                      <div className="coursework-section">
                        <div className="coursework-label">Relevant Coursework:</div>
                        <div className="coursework-list">
                          {education[key]["coursework"].join(", ")}
                        </div>
                      </div>
                    </div>
                  </li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

