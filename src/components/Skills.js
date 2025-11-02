import React from "react";
import "../styles/Skills.css";
import FadeInSection from "./FadeInSection";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
  }

  render() {
    const skills = {
      "Programming & Development": {
        items: [
          "Python",
          "Java",
          "C++",
          "R",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "Node.js",
          "Flask",
          "RESTful APIs",
          "HTML",
          "CSS"
        ] 
      },
      "Data Science, AI & Analytics": {
        items: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing (NLP)",
          "Generative AI",
          "Computer Vision",
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
          "Pandas",
          "NumPy",
          "PySpark",
          "OpenCV",
          "Matplotlib",
          "Power BI",
          "Tableau"
        ]
      },
      "Cloud, Big Data & DevOps": {
        items: [
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Apache Airflow",
          "Apache Spark",
          "Kafka",
          "MySQL",
          "PostgreSQL",
          "MongoDB"
        ]
      },
      "Version Control & Operating Systems": {
        items: [
          "Git",
          "GitHub",
          "Jira",
          "Linux",
          "macOS",
          "Windows"
        ]
      }
    };

    return (
      <div id="skills">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title"># skills</span>
          </div>
        </FadeInSection>
        <div className="skills-content">
          <div className="skill-container">
            <ul className="skills-grid">
              {Object.keys(skills).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li className="skills-card">
                    <div className="card-header">
                      <div className="category-title">{key}</div>
                    </div>
                    <div className="card-content">
                      <div className="skills-list">
                        {skills[key]["items"].join(", ")}
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

export default Skills;

