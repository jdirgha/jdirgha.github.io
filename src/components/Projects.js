import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Mind Map": {
        title: "Mind Map",
        desc:
          " A fun multiplayer word game where players submit words related to a theme, and one mindless player tries to blend in without knowing the theme!",
        techStack: "JAVASCRIPT",
        link: "https://github.com/jdirgha/Mind-Map",
        open: " ",
        image: "/assets/mind.png"
      },
      Truth: {
        title: "ML Playground",
        desc:
          "An interactive Streamlit app to visualize and explore ML algorithms on synthetic data",
        techStack: "PYTHON, STREAMLIT",
        link: "https://github.com/jdirgha/ML-Playground",
        image: "/assets/play.png"
      },
      "Meeting Analytics Dashboard": {
        title: "Meeting Analytics Dashboard",
        desc:
          "A meeting intelligence platform",
        techStack: "PYTHON, Material UI",
        link: "https://github.com/jdirgha/Meeting-Analytics-System",
        open: " ",
        image: "/assets/meetings.jpg"
      }
    };
    const projects = {
      "NeuroLoop": {
        desc:
          "A real-time, feedback-driven AI experimentation platform that lets researchers test perception models on live multimodal data streams and monitor performance with interactive dashboards.",
        techStack: "Python, JavaScript (React), SQL",
        link: "https://github.com/jdirgha/neuroloop",
        open: ""
      },
      "AI Clinical Risk Prediction": {
        desc:
          "A system that uses BioBERT and XGBoost on MIMIC-IV notes to predict 30-day patient mortality with interpretable outputs for clinical decisions.",
        techStack: "Python, NLP(BioBERT, scispaCy), XGBoost, SHAP, T5/BERTSUM",
        link: " ",
        open: ""
      },
      "Meeting Analytics System": {
        desc:
          "A meeting intelligence platform that converts live or uploaded audio into searchable transcripts, topic clusters, speaker insights, and action-item summaries.",
        techStack: "Python,Whisper ASR, FastAPI, BERTopic, LLMs, PostgreSQL, AWS",
        link: "https://github.com/jdirgha/Meeting-Analytics-System",
        open: ""
      },
      "Personalized Recommendation Engine": {
        desc:
          "A system that uses collaborative filtering and BERT-based embeddings to deliver personalized product recommendations like Amazon or Netflix.",
        techStack: "Python, PySpark, BERT",
        link: "https://github.com/jdirgha/Personalized-Recommendation-Engine",
        open: ""
      },
      "Facial Emotion Recognition": {
        desc:
          "Facial Emotion Recognition system using CNN and OpenCV to classify real-time expressions into seven emotions with 70% accuracy.",
        techStack: "TensorFlow/Keras, OpenCV, Python ",
        link: "https://github.com/jdirgha/Facial-Emotion-Recognition.git",
        open: ""
      },
      "Second-Hand Trading Platform": {
        desc:
          "Built a secure campus-focused second-hand trading platform with real-time messaging, integrated payments, and AWS cloud deployment using Docker & Kubernetes.",
        techStack: "Node.js, React, AWS (EC2, RDS, S3), MySQL",
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title"># projects</span>
          </div>
        </FadeInSection>
        <div className="projects-content">
          <Carousel>
            {Object.keys(spotlightProjects).map((key, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={spotlightProjects[key]["image"]}
                  alt={key}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{spotlightProjects[key]["title"]}</h3>
                    <p>
                      {spotlightProjects[key]["desc"]}
                      <p className="techStack">
                        {spotlightProjects[key]["techStack"]}
                      </p>
                    </p>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    ></ExternalLinks>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="project-container">
            <ul className="projects-grid">
              {Object.keys(projects).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li className="projects-card">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon
                          style={{ fontSize: 35 }}
                        ></FolderOpenRoundedIcon>
                      </div>
                      <ExternalLinks
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                      ></ExternalLinks>
                    </div>
                    <div className="card-content">
                      <div className="card-title">{key}</div>
                      <div className="card-desc">{projects[key]["desc"]}</div>
                      <div className="card-tech">{projects[key]["techStack"]}
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

export default Projects;
